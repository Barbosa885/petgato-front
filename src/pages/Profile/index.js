import React, { useLayoutEffect } from 'react';
import * as styled from './styles';

import Cintia from './Cintia.jpg';
import CameraIcon from './Camera.svg'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/WhiteButton'
import InputText from '../../components/InputText'


function Profile() {
    return (
        <>
        
        <Navbar />
            <styled.Background>
                <styled.ProfilePhoto>
                    <img src={Cintia} />
                </styled.ProfilePhoto>
                <styled.ChangePhoto>
                    <styled.CamIcon src={CameraIcon}  /> 
                    Alterar foto de perfil
                </styled.ChangePhoto>
                <styled.Title> SUA CONTA </styled.Title>
                <styled.SubTitle> Edite seu perfil </styled.SubTitle>
                <styled.InputNome>
                    <InputText children='Nome'/> 
                </styled.InputNome>
                <styled.InputNovaSenha>
                    <InputText children='Nova Senha'/>
                </styled.InputNovaSenha>
                <styled.InputSenhaAtual>
                    <InputText children='Senha Atual'/> 
                </styled.InputSenhaAtual>
                <styled.InputEmail>
                    <InputText children='Email'/> 
                </styled.InputEmail>
                <styled.InputConfirmSenha>
                    <InputText children='Confirme sua senha'/> 
                </styled.InputConfirmSenha>
                <styled.ButtonContainer >
                    <Button children='Salvar'/>  
                </styled.ButtonContainer>
                <styled.txt>Deixe em branco caso não queira alterar</styled.txt>
            </styled.Background>
        <Footer />
        </>
    )
}

export default Profile
