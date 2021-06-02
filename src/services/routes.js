import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import SignIn from '../pages/SignIn';
import ExamplePage from '../pages/ExamplePage';
import LoginPage from '../pages/LoginPage';
import CadastroPage from '../pages/CadastroPage';
import EsqueciPage from '../pages/EsqueciPage';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={() => <LoginPage />} />
                <Route exact path='/cadastro' component={() => <CadastroPage />} />
                <Route exact path='/esqueciSenha' component={() => <EsqueciPage />} />

                <Route path="/" exact component={Home}>
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