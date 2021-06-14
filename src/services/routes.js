import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import AboutUs from '../pages/About Us';
import Contact from '../pages/Contact';
import CadastroPage from '../pages/LoginPage';
import LoginPage from '../pages/CadastroPage';
import EsqueciPage from '../pages/EsqueciPage';
import CreatePubli from '../pages/CreatePubli';
import VisualizacaoPost from '../pages/Visualizacao Post';
import RecuperarPage from '../pages/RecuperarPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route exact path='/sobre' component={AboutUs}  />
                <Route exact path='/contato' component={ContactUs} />
                <Route exact path='/createpubli' component={() => <CreatePubli />} />
                <Route exact path='/login' component={() => <LoginPage />} />
                <Route exact path='/cadastro' component={() => <CadastroPage />} />
                <Route exact path='/esqueciSenha' component={() => <EsqueciPage />} />
                <Route exact path='/contato' component={Contact} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/cadastro' component={CadastroPage} />
                <Route exact path='/esqueciSenha' component={EsqueciPage} />
                <Route exact path='/postagem' component={VisualizacaoPost} />
                <Route exact path='/recuperarSenha' component={RecuperarPage} />
            </Switch>
        </Router>
    );
}

export default Routes;