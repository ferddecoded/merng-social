import React from "react";
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "@apollo/client/link/context";
import { ViewportProvider } from "../context/Viewport";
import fetch from "isomorphic-unfetch";

const httpLink = createHttpLink({
  uri: "api/graphql",
  fetch,
});

// The setContext function accepts a function that returns either an object or a promise, which then returns an object to set the new context of a request.
// It receives two arguments: the GraphQL request being executed, and the previous context.
// This link makes it easy to perform the asynchronous lookup of things like authentication tokens and more.
const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ViewportProvider>
        <Component {...pageProps} />
      </ViewportProvider>
    </ApolloProvider>
  );
}

export default MyApp;
