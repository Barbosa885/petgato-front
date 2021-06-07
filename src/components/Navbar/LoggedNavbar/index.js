import React, {useState, createContext} from 'react';
import LogoPetGato from '../../../assets/gatinho_petgato_branco.svg';
import { Background, Logo } from './styles';


import Burguer from '../Burguer'


export default function LoggedNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    
    
    }

    return (
        <Background>
            <a href='/' onClick={handleToggle}>
                <Logo src={LogoPetGato} />
            </a>
            <Burguer /> 
        </Background>

    )
}
