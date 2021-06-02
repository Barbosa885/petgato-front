import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from '../pages/Contact';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/contact' component={() => <Contact />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;