import React from 'react';
import { Background } from './styles'
import { Titulo } from './styles'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function AboutUs() {
    return (
        <Background>
            <Navbar />
            <Titulo>
                Sobre Nós
            </Titulo>
            <Footer />
        </Background>
        

            
        
    )
}

export default AboutUs
