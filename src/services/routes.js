import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import AboutUs from '../pages/About Us';
import ContactUs from '../pages/Contact';
import CadastroPage from '../pages/LoginPage';
import LoginPage from '../pages/CadastroPage';
import EsqueciPage from '../pages/EsqueciPage';
import CreatePubli from '../pages/CreatePubli';
import VisualizacaoPost from '../pages/Visualizacao Post';
import RecuperarPage from '../pages/RecuperarPage';
import Profile from '../pages/Profile';
import BackofficeEditarUsuario from '../pages/Backoffice/EditarPerfil'
import EditarTag from '../pages/Backoffice/EditarTag'
import BackofficePost from '../pages/Backoffice Post';

const RouteNavbarAndFooter = ({ component: Component, ...props }) => {
    return (
        <Route {...props}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '100vh',
            }}
            >
                <Navbar />
                <Component />
                <Footer />
            </div>
        </Route>
    )
}

const Routes = () => {
    return (
        <Router>
            <Switch>
                <RouteNavbarAndFooter path='/' exact component={Home} />
                <RouteNavbarAndFooter exact path='/sobre' component={AboutUs} />
                <RouteNavbarAndFooter exact path='/contato' component={ContactUs} />
                <RouteNavbarAndFooter exact path='/createpubli' component={CreatePubli} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/cadastro' component={CadastroPage} />
                <Route exact path='/esqueciSenha' component={EsqueciPage} />
                <RouteNavbarAndFooter exact path='/postagem/:id' component={VisualizacaoPost} />
                <Route exact path='/recuperarSenha' component={RecuperarPage} />
                <RouteNavbarAndFooter exact path='/meuPerfil' component={Profile} />
                <RouteNavbarAndFooter exact path='/editarUsuario' component={BackofficeEditarUsuario} />
                <RouteNavbarAndFooter exact path='/backofficePost/:id' component={BackofficePost} />
                <RouteNavbarAndFooter exact path='/editarTag' component={EditarTag} />
            </Switch>
        </Router>
    );
}

export default Routes;