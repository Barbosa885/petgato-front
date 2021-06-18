import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    li{
        cursor: pointer;
    }
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
    <Ul  open={open}>
        <li><a href='/'>Página Inicial</a></li>
        <li><a href='/sobre'>Sobre Nós</a></li>
        <li><a href='/contato'>Fale Conosco</a></li>
        <li><a href={localStorage.getItem('token') ? '/meuPerfil' : '/login'}>{localStorage.getItem('token') ? 'Minha Conta' : 'Entrar'}</a></li>
        {localStorage.getItem('token') && <li><a onClick={() => {localStorage.removeItem('token');
        window.location.reload(false)}}> Sair </a></li>}
    </Ul>
    )
}

export default Rightnav
