import React from 'react';
import * as styled from './styles';

import TwitterIcon from './Twitter.svg';
import FaceIcon from './Facebook.svg';
import InstaIcon from './Instagram.svg';
import SearchIcon from './SearchIcon.svg';
import Cintia from './Cintia.jpg'

import InputText from '../../components/Contact Input'

function Home() {
    return (
        <styled.Background>
            <styled.LeftBox>
                <styled.PhotoContainer>
                    <img src={Cintia} class='Foto'/>
                    <styled.TextoContainer>
                        <styled.Title> SOBRE A AUTORA </styled.Title>
                        <styled.Subtitle> Cíntia Lorenzzo </styled.Subtitle>
                        <styled.Texto> 
                            Sou veterinária há 5 anos,
                            apaixonada pelo mundo animal,
                            principalmente os que estão 
                            sempre conosco no dia a dia.
                            Quando não estou no meu 
                            consultório ou com meus pets,
                            estou aqui escrevendo conteúdo para vocês. Espero que você goste! 
                        </styled.Texto>
                    </styled.TextoContainer>
                <styled.RedesContainers>
                    <img src={TwitterIcon} class='Twitter'/>
                    <img src={FaceIcon} class='Twitter'/>
                    <img src={InstaIcon} class='Twitter'/>
                </styled.RedesContainers>
                </styled.PhotoContainer>
            </styled.LeftBox>
        </styled.Background>
        
    )
}

export default Home;
