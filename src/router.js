import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import Header from './components/header/header';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}