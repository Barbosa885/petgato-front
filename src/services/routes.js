import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExamplePage from '../pages/ExamplePage';
import LoginPage from '../pages/LoginPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={() => <LoginPage />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;