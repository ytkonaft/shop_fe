import React from "react";
import { getDataFromTree } from "react-apollo";
import Head from "next/head";
import initApollo from "./init-apollo";

export default App => {
  return class Apollo extends React.Component {
    static displayName = "withApollo(App)";
    static async getInitialProps(ctx) {
      const { Component, router } = ctx;

      const headers = ctx.ctx.req && ctx.ctx.req.headers;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo(null, headers);
      if (typeof window === "undefined") {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();
      return {
        ...appProps,
        apolloState,
        headers
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = initApollo(props.apolloState, props.headers);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
