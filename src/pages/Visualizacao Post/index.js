import React from 'react';
import { useHistory } from 'react-router-dom';
import LeftArrow from '../../assets/Icon awesome-chevron-left.svg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Cadastro from '../../assets/Cadastro.jpg';

import * as Styled from './styles'

const VisualizacaoPost = () => {

    let history = useHistory();

    const redirect = () => {
      history.push('/')
    }

    return (
        <div>
            <Navbar />
            <Styled.Page>
                <Styled.BackButton onClick={redirect}>
                    <img src={LeftArrow}/>
                    <Styled.Back>Voltar</Styled.Back>
                </Styled.BackButton>
                <Styled.Title>Um título legal</Styled.Title>
                <Styled.Date>Data de postagem</Styled.Date>
                <Styled.Banner src={Cadastro}></Styled.Banner>
                <Styled.Body>
                    <p>Exemplo de postagem</p>
                </Styled.Body>
            </Styled.Page>
            <Footer />
        </div>
    );
}

export default VisualizacaoPost;