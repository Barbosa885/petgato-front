import React, { useLayoutEffect } from 'react';
import * as styled from './styles';

import Cintia from './Cintia.jpg';
import CameraIcon from './Camera.svg';

import WhiteButton from '../../components/WhiteButton';
import WhiteInputText from '../../components/WhiteInputText';



const Profile = () => {

    return (
    <>
    <styled.Background>
        <styled.PictureContainer>
            <img src={Cintia} class='Foto' />
            <div class='containerBotao'>
                <img src={CameraIcon} class='Botao' />
                <a> Alterar foto de perfil </a>
            </div>
        </styled.PictureContainer>
    <styled.Form>
        <styled.Title> SUA CONTA </styled.Title>
        <styled.Subtitle> Edite seu perfil </styled.Subtitle>
        <styled.InputContainer >
            <WhiteInputText children='Nome' />
            <WhiteInputText children='Email' disabled />
            <WhiteInputText children='Nova senha' />
            <WhiteInputText children='Confirme sua senha' />
            <WhiteInputText children='Senha atual' />
        </styled.InputContainer>
        <styled.ButtonContainer>
          <WhiteButton children='Salvar' />
        </styled.ButtonContainer>  
      </styled.Form>
    </styled.Background>
    </>
    )
}

export default Profile
