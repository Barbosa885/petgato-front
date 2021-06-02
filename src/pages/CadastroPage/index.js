import React from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import './styles.css';
import ImagemLogin from '../../assets/Login.jpg';
import {ReactComponent as Logo} from '../../assets/gatinho_petgato.svg';


const CadastroPage = () => {
    return (
        <div className='divlogin'>
            <div className='imagemLogin'> 
                <img src={ImagemLogin}/>
            </div>
            <div className='cadastro'>
                
                <form className='cadastro'>
                    <Logo className='arrumando'/>
                    <InputText>Email</InputText>
                    <InputText>Senha</InputText>
                    <ButtonMain>ENTRAR</ButtonMain>
                    <div className='ladoalado'>
                        <a className='melhorando'>Esqueci minha senha</a>
                    </div>
                    <div className='ladoalado'>
                        <p> Ainda não tem conta?</p>
                        <a className='melhorando'> Crie sua conta </a>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default CadastroPage;