import { createUploadLink } from "apollo-upload-client";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
import { endpoint } from "../../config";

let apolloClient = null;

const create = (initialState) => {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== "undefined";

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: createUploadLink({ uri: endpoint }),
    cache: new InMemoryCache().restore(initialState || {})
  });
};

const initApollo = (initialState) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)

  if (typeof window === "undefined") {
    return create(initialState);
  }
  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }
  return apolloClient;
};

export default initApollo;
