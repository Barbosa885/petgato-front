import React from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import './styles.css';
import Esqueci from '../../assets/Esqueci minha senha.jpg';
import {ReactComponent as Logo} from '../../assets/gatinho_petgato.svg';


const EsqueciPage = () => {
    return (
        <div className='divlogin'>
            <div className='imagemLogin'> 
                <img src={Esqueci}/>
            </div>
            <div className='cadastro'>
                
                <form className='cadastro'>
                    <Logo className='arrumando'/>
                    <InputText>Email</InputText>
                    <p> insira seu email para recuperar senha</p>
                    <ButtonMain>RECUPERAR SENHA</ButtonMain>
                    <div className='ladoalado'>
                        <p>Lembrou a senha?</p>
                        <a className='melhorando'>Faça Login</a>
                    </div>
                    <div className='ladoalado'>
                        <p> Ainda não tem conta?</p>
                        <a className='melhorando'> Cadastre-se aqui </a>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default EsqueciPage;