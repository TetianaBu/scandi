import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import CategoryPage from './CategoryPage';
import ProductDescriptionPage from './product/ProductDescriptionPage';
import Cart from './cart/Cart';
import Start from './StartPage';
import NotFound from './NotFound';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={Start} />
          <Route
            exact
            path="/:category"
            render={({
              match: {
                params: { category }
              }
            }) => <CategoryPage category={category} />}
          ></Route>
          <Route
            exact
            path="/:category/:id"
            render={({
              match: {
                params: { id, category }
              }
            }) => <ProductDescriptionPage id={id} category={category} />}
          ></Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
