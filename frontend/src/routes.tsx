import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/LandingPage'
import UserForm from './pages/UserFormPage'

function Routes() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/register" exact component={UserForm}/>
    </Switch>
    </BrowserRouter>
  );
}
export default Routes;