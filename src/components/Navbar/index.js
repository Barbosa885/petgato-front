import React, {useState} from 'react';
import LogoPetGato from '../../assets/gatinho_petgato_branco.svg';
import { Background, Logo } from './styles'


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Background>
            <a href='/' onClick={handleToggle}>
                <Logo src={LogoPetGato}/>
            </a>
            <ul>
                <li><a href='/'>Página inicial</a></li>
                <li><a href='/AboutUs'>Sobre nós</a></li>
                <li><a href='/ContactUs'>Fale conosco</a></li>
                <li><a href='/SignIn'>Entrar</a></li>
            </ul>
        </Background>

    )
}
