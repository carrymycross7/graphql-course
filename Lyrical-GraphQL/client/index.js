import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import {ApolloError, ApolloProvider} from "react-apollo";

import SongList from "./components/SongList";

const CLIENT = new ApolloClient({});

const Root = () => {
  return (
      <ApolloProvider client={CLIENT}>
        <SongList />
      </ApolloProvider>
  )
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
