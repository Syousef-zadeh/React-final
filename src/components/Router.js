import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import Section from './Section';
import Login from './Login';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login/:loginId" component={App} />
            <Route path="/home" component={App} />
            <Route path="/services" component={Section} />
            <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}export default Router;
