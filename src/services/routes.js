import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from '../pages/Contact';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/contato' component={() => <Contact />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;