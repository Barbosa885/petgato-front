import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home';
import AboutUs from '../pages/About Us';
import Contact from '../pages/Contact';
import CadastroPage from '../pages/LoginPage';
import LoginPage from '../pages/CadastroPage';
import EsqueciPage from '../pages/EsqueciPage';
import Profile from '../pages/Profile';
import EditarPerfil from '../pages/Backoffice/EditarPerfil'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route exact path='/sobre' component={AboutUs}>
                    <Navbar />
                    <AboutUs />
                    <Footer />
                </Route>
                <Route exact path='/contato' component={Contact}> 
                    <Navbar />
                    <Contact />
                    <Footer />
                </Route>
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/cadastro' component={CadastroPage} />
                <Route exact path='/esqueciSenha' component={EsqueciPage} />
                <Route exact path='/meuPerfil' component={Profile} />
                <Route exact path='/editarPerfil' component={EditarPerfil} />
            </Switch>
        </Router>
    );
}

export default Routes;