import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import ApolloClient from "apollo-client";
import {ApolloError, ApolloProvider} from "react-apollo";
import gql from 'graphql-tag';
import SongList from "./components/SongList";
import App from './components/App';
import SongCreate from "./components/SongCreate";
const CLIENT = new ApolloClient({});

const Root = () => {
  return (
      <ApolloProvider client={CLIENT}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute components={SongList} />
                <Route path="songs/new" component={SongCreate} />
            </Route>
        </Router>
      </ApolloProvider>
  )
};


ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
