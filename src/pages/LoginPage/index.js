import React, { useState } from 'react';
import api from '../../services/api';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import ImageLogin from '../../assets/Login.jpg';
import ImgLogo from '../../assets/gatinho_petgato.svg';
import * as Styled from './styles';

const LoginPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault(); // não recarregar a página
        
        // verifica se os campos estão todos preeenchidos
        if (name.length === 0 || email.length === 0 || password.length === 0) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        api.post('/users', {
            name: name,
            email: email,
            password : password
        })
        .then(() => {
            alert('Mensagem enviada com sucesso!');

            // limpa os campos preenchidos
            setName('');
            setEmail('');
            setPassword('');
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }

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
                    <InputText >Email</InputText>
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

export default LoginPage;