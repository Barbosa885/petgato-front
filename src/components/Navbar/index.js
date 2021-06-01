import React from 'react';
import LogoPetGato from '../../assets/gatinho_petgato_branco.svg';
import { Logo } from './styles'


function index() {
    return (
        <Logo>
            <img src={LogoPetGato}/>
        </Logo>
    )
}

export default index;
