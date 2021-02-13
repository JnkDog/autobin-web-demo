import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';

import Dashboard from "./components/Dashboard/Dashboard";
import MapInfo from './components/Map/MapInfo';

export default props => (
    <HashRouter>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/mapinfo' component={ MapInfo } />
        </Switch>
    </HashRouter>
)