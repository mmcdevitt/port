import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';

export default class PublicRoutes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    )   
  }
}