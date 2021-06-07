import React from 'react'
import {Background} from './styles'
import {Titulo} from './styles'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoggedNavbar from '../../components/Navbar/LoggedNavbar'

function index() {
    return (
        <Background>
            <LoggedNavbar />
            <Titulo>
               Home 
            </Titulo>
            <Footer />
        </Background>
    )
}

export default index
