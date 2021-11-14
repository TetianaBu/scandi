import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import { CartContextProvider } from './components/CartContext';
import { CurrencyContextProvider } from './components/CurrencyContext';

import Router from './components/Router';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CurrencyContextProvider>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </CurrencyContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
