import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            </Switch>
        </Router>
    );
}

export default Routes;