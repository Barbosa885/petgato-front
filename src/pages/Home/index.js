import React from 'react'
import {Background} from './styles'
import {Titulo} from './styles'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function index() {
    return (
        <Background>
            <Navbar />
            <Titulo>
               Home 
            </Titulo>
            <Footer />
        </Background>
    )
}

export default index
