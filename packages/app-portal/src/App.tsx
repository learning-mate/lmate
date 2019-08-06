import { App as ThisApp } from '@lmate/schema';
import React, { Component, Suspense } from 'react';
import AppNav from './components/AppNav';

import {
  BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom';

export default class App extends Component {
  private app: ThisApp.App;
  constructor(props) {
    super(props);
    this.app = require('./appConfig.json');
  }
  public render() {
    return (
      <BrowserRouter>
        <React.Fragment>
            { this.app.nav && <AppNav {...this.app.nav}/> }
            <Suspense fallback='Loading...'>
              {Object.keys(this.app.features).map( (key) => {
                const { pathname, component } = this.app.features[key];
                return <Route exact path={pathname} component={React.lazy(() => import(`${component}`))}/>;
                /* const bcomponent = React.lazy(() => import('@lmate/design').then((module) => ({default: module.Navigation}) )); */
              })}
            </Suspense>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
