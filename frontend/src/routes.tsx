import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/LandingPage'
import UserForm from './pages/UserFormPage'
import ComplimentForm from './pages/ComplimentFormPage'

function Routes() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/register" exact component={UserForm}/>
        <Route path="/compliment/new" exact component={ComplimentForm}/>
    </Switch>
    </BrowserRouter>
  )
}
export default Routes;