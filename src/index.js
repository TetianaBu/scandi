import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import { AppContextProvider } from './components/Context';
import Router from './components/Router';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

