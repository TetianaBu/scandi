import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import CategoryPage from './CategoryPage';
import ProductDescriptionPage from './ProductDescriptionPage';
import Cart from './Cart';
import Start from './Start';
import NotFound from './NotFound';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
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
                params: { id }
              }
            }) => <ProductDescriptionPage id={id} />}
          ></Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
