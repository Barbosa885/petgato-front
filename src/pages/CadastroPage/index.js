import React from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import ImageLogin from '../../assets/Cadastro.jpg';
import ImgLogo from '../../assets/gatinho_petgato.svg';
import * as Styled from './styles'


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
                    <InputText>Nome</InputText>
                    <InputText>Email</InputText>
                    <InputText>Senha</InputText>
                    <InputText>Confirme sua senha</InputText>
                    <ButtonMain>CADASTRAR</ButtonMain>
                    <Styled.LadoaLado>
                            <p> Já possui conta? </p>
                            <a href='/login' > Faça Login </a>
                    </Styled.LadoaLado>
                </Styled.FormCadastro>
                
            </Styled.Cadastro>
        </Styled.DivLogin>
    );
}

export default CadastroPage;