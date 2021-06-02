import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import SignIn from '../pages/SignIn';


const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route component={Home} path="/" exact>
                    <Home />
                    <Footer />
                </Route>
                <Route component={AboutUs} path="/AboutUs" >
                    <Footer />
                    <AboutUs />
                </Route>
                <Route component={ContactUs} path="/ContactUs" >
                    <Footer />
                    <ContactUs />
                </Route>
                <Route component={SignIn} path="/SignIn" >
                    <Footer />
                    <SignIn  />
                </Route>
                
                
            </Switch>
        </Router>
    );
}

export default Routes;