import React, { Component } from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Result from './Result';

class Router extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/results/:patientId" component={Result} />
            {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Router;
