import React from 'react';
import * as styled from './styles';

import WhiteInputText from '../../../components/WhiteInputText';
import Button from '../../../components/Button';
import WhiteButton from '../../../components/Contact Button';

function BackofficeEditarUsuario() {
  return (
    <>
    <styled.Background >
      <styled.Form>
        <styled.Title> BACKOFFICE </styled.Title>
        <styled.Subtitle> Editar Usuário </styled.Subtitle>
          <styled.InputContainer >
            <WhiteInputText children='Nome' />
            <WhiteInputText children='Email' disabled />
            <WhiteInputText children='Tipo de usuário' />
            <WhiteInputText children='Data de ingresso' disabled />
          </styled.InputContainer>
        <styled.ButtonContainer>
          <Button children='Salvar' />
          <WhiteButton children='Voltar' />
        </styled.ButtonContainer>  
      </styled.Form>
    </styled.Background> 
    </>
  )
}

export default BackofficeEditarUsuario;
