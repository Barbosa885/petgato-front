import React from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import './styles.css';
import GatoLogin from '../../assets/Cadastro.jpg';
import {ReactComponent as Logo} from '../../assets/gatinho_petgato.svg';

const LoginPage = () => {
    return (
        <div className='divlogin'>
            <div className='imagemLogin'> 
                <img src={GatoLogin}/>
            </div>
            <div className='cadastro'>
                
                <form className='cadastro'>
                    <Logo className='arrumando'/>
                    <InputText>Nome</InputText>
                    <InputText>Email</InputText>
                    <InputText>Senha</InputText>
                    <InputText>Confirme sua senha</InputText>
                    <ButtonMain>CADASTRAR</ButtonMain>
                    <div className='ladoalado'>
                        <p> Já possui conta?</p>
                        <a className='melhorando'> Faça Login </a>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default LoginPage;