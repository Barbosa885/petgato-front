import React from 'react';
import Button from '../../components/Button';
import ImagemdeContato from './Imagem de Contato.jpg';

import * as Styled from './styles'

const Contact = () => {
return (
    <Styled.Contact>
        <Styled.Image src={ImagemdeContato} alt="doguinho"/>
        <Styled.Form>
            <Styled.Title> FALE CONOSCO</Styled.Title>
            <Styled.Subtitle>Envie-nos uma mensagem de cão-tato</Styled.Subtitle>
            <Styled.FormContainer>
                <Styled.FormInput>
                    <Styled.Label>Nome</Styled.Label>
                    <Styled.TextArea>Nome</Styled.TextArea>
                </Styled.FormInput>
                <Styled.FormInput>
                    <Styled.Label>Email</Styled.Label>
                    <Styled.TextArea>Email</Styled.TextArea>
                </Styled.FormInput>
            </Styled.FormContainer>
                <Styled.Label>Mensagem</Styled.Label>
                <Styled.Message>Digite aqui a sua meow-sagem...</Styled.Message>
            <Styled.FormContainer>
            <Styled.Submit>
                <Button>Enviar</Button>
            </Styled.Submit>
            </Styled.FormContainer>
        </Styled.Form>
    </Styled.Contact>
);
}

export default Contact;