import React, { Component } from 'react';
import Home from "./pages/home";
import Edit from "./pages/edit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavigationContainer from "./navigation/navigation-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <NavigationContainer/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/edit" component={Edit} />
          </Switch>
        </Router>
      </div>
    );
  }
}
