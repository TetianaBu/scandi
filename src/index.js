import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import { CartContextProvider } from './components/Cart/CartContext';
import { CurrencyContextProvider } from './components/currencies/CurrencyContext';

import Router from './components/Router';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({
    typePolicies: {
      AttributeSet: {
        keyFields: false,
      }
    }
  })
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
