import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import {ApolloError, ApolloProvider} from "react-apollo";

const client = new ApolloClient({});
const Root = () => {
  return (
      <ApolloProvider client={client}>
        <div>
          Lyrical
        </div>
      </ApolloProvider>
  )
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
