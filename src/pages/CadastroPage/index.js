import React from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import ImageLogin from '../../assets/Login.jpg';
import ImgLogo from '../../assets/gatinho_petgato.svg';
import * as Styled from './styles';


const LoginPage = () => {
    return (
        <Styled.DivLogin>
            <Styled.ImagemLogin> 
                <img src={ImageLogin}/>
            </Styled.ImagemLogin>
            <Styled.Cadastro>
                
                <Styled.FormCadastro>
                    <Styled.Logo src={ImgLogo} />
                    <InputText>Email</InputText>
                    <InputText>Senha</InputText>
                    <ButtonMain>ENTRAR</ButtonMain>
                    <Styled.LadoaLado>
                        <a href='/esqueciSenha' >Esqueci minha senha</a>
                    </Styled.LadoaLado>
                    <Styled.LadoaLado>
                        <p> Ainda não tem conta?</p>
                        <a href='/cadastro' > Crie sua conta </a>
                    </Styled.LadoaLado>
                </Styled.FormCadastro>
                
            </Styled.Cadastro>
        </Styled.DivLogin>
    );
}

export default LoginPage;