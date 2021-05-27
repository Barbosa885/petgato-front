import React from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';

import './styles.css';

const ExamplePage = () => {
    return (
        <div className='example'>
            <form className='login'>
                <InputText>
                    Teste
                </InputText>   
            </form>
            <ButtonMain>
                    Cadastrar
            </ButtonMain>
        </div>
    );
}

export default ExamplePage;