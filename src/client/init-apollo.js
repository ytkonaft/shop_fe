import { createUploadLink } from "apollo-upload-client";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
import { endpoint } from "../../config";

let apolloClient = null;

const create = (initialState, headers) => {
  const isBrowser = typeof window !== "undefined";

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    cache: new InMemoryCache().restore(initialState || {}),
    link: createUploadLink({
      uri: endpoint,
      fetch,
      fetchOptions: { credentials: "include" },
      headers: { cookie: headers && headers.cookie },
      credentials: "include"
    })
  });
};

const initApollo = (initialState, headers) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)

  if (typeof window === "undefined") {
    return create(initialState, headers);
  }
  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, headers);
  }
  return apolloClient;
};

export default initApollo;
