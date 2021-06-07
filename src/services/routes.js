import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import CadastroPage from '../pages/LoginPage';
import LoginPage from '../pages/CadastroPage';
import EsqueciPage from '../pages/EsqueciPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route exact path='/sobre' component={AboutUs}  />
                <Route exact path='/contato' component={Contact} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/cadastro' component={CadastroPage} />
                <Route exact path='/esqueciSenha' component={EsqueciPage} />
            </Switch>
        </Router>
    );
}

export default Routes;