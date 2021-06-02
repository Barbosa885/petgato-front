import React from 'react'
import { Background } from './styles'
import { Titulo } from './styles'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function ContactUs() {
    return (
        <Background>
            <Navbar />
            <Titulo>ContactUs</Titulo>
            <Footer />
        </Background>
    )
}

export default ContactUs

