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
            <div class='ContainerPhoto'>
                <styled.ProfilePhoto>
                    <img src={Cintia} />
                </styled.ProfilePhoto>
                <styled.ChangePhoto>
                    <styled.CamIcon src={CameraIcon}  /> 
                    Alterar foto de perfil
                </styled.ChangePhoto>
            </div>
            <div class='ContainerTitulo'>
                <styled.Title> SUA CONTA </styled.Title>
                <styled.SubTitle> Edite seu perfil </styled.SubTitle>
            </div> 
            <div class='ContainerInput'>
                <InputText children='Nome'/>
                <InputText children='Nova Senha'/>
                <InputText children='Senha Atual'/>
                <Button children='Salvar'/>
            </div>
        </styled.Background>
        <Footer />
        </>
    )
}

export default Profile
