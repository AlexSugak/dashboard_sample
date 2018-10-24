import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import DefaultLayout from './pages/DefaultLayout';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/" name="Home" component={DefaultLayout} />
    </Switch>
  </BrowserRouter>
);

export default App;
