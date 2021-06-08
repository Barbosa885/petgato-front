import React from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import ImageLogin from '../../assets/Login.jpg';
import ImgLogo from '../../assets/gatinho_petgato.svg';
import * as Styled from './styles';
import LoginPage from '../LoginPage';


const CadastroPage = () => {
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
                    <InputText>Senha</InputText>
                    <ButtonMain>ENTRAR</ButtonMain>
                    <Styled.LadoaLado>
                        <a href='/esqueciSenha' >Esqueci minha senha</a>
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

export default CadastroPage;