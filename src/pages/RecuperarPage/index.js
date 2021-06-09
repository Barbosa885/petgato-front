import React from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import ImageLogin from '../../assets/Esqueci minha senha.jpg';
import ImgLogo from '../../assets/gatinho_petgato.svg';
import * as Styled from './styles'


const RecuperarPage = () => {
    return (
        <Styled.DivLogin>
            <Styled.ImagemLogin> 
                <img src={ImageLogin}/>
            </Styled.ImagemLogin>
            <Styled.Cadastro>
                
                <Styled.FormCadastro>
                    <a href='/'>
                        <Styled.Logo src={ImgLogo} />
                    </a>
                    <InputText>Email</InputText>
                    <p> insira seu email para redefinir a senha</p>
                    <InputText>Código</InputText>
                    <p> insira o código recebido no email</p>
                    <InputText>Nova Senha</InputText>
                    <p> insira sua nova senha</p>
                    <ButtonMain>REDEFINIR SENHA</ButtonMain>
                    <Styled.LadoaLado>
                        <p>Lembrou a senha?</p>
                        <a href='/login' >Faça Login</a>
                    </Styled.LadoaLado>
                    <Styled.LadoaLado>
                        <p> Ainda não tem conta? </p>
                        <a href='/cadastro' > Crie sua conta </a>
                    </Styled.LadoaLado>
                </Styled.FormCadastro>
                
            </Styled.Cadastro>
        </Styled.DivLogin>
    );
}

export default RecuperarPage;