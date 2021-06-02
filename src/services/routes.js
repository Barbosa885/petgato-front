import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from '../pages/Contact';
import AboutUs from '../pages/About Us';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/contact' component={() => <Contact />} />
                <Route path='/aboutus' component={() => <AboutUs />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;