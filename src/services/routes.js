import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ExamplePage from '../pages/ExamplePage';
import ExamplePageNavbar from '../pages/ExamplePageNavbar'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route component={ExamplePage} path="/ExamplePage" exact/>
                <Route component={ExamplePageNavbar} path="/ExamplePageNavbar" exact/>
            </Switch>
        </Router>
    );
}

export default Routes;