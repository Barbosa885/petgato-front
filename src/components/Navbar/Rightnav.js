import React, { createContext } from 'react'
import styled from 'styled-components'


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row wrap;

@media (max-width: 768px) {
    position: sticky;
    flex-flow: column nowrap;
    background-color: #BA66A3;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

}

`

function Rightnav({ open }) {
    return (
        <Ul>
            <li><a href='/'>Página Inicial</a></li>
            <li><a href='/sobre'>Sobre Nós</a></li>
            <li><a href='/contato'>Fale Conosco</a></li>
            <li><a href='/login'>Entrar</a></li>
    
        </Ul>
    )
    }     


export default Rightnav
