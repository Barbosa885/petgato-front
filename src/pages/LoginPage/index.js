import React from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import './styles.css';

const LoginPage = () => {
    return (
        <div className='divlogin'>
            <div className='cadastro'>
                <form className='cadastro'>
                    <InputText>Nome</InputText>
                    <InputText>Email</InputText>
                    <InputText>Senha</InputText>
                    <InputText>Confirme sua senha</InputText>
                </form>
                <ButtonMain>Cadastrar</ButtonMain>
            </div>
        </div>
    );
}

export default LoginPage;