import React from 'react';
import Navbar from '../../components/Navbar'; 
import ExampleButton from '../../components/ExampleButton'; 
import { Example } from './styles'

const ExamplePage = () => {
    return (
        <Example>
            <ExampleButton>    
                Valorant
            </ExampleButton>
        </Example>
            
    );
}

export default ExamplePage;