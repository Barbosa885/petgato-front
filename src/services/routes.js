import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExamplePage from '../pages/ExamplePage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={() => <ExamplePage />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;