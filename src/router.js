import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import Cart from './pages/cart/cart';
import ProductDetail from './pages/product-detail/product-detail';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/cart" component={Cart} />
        <Route path="/product-detail/:id" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}