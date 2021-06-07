import React from 'react';
// import './styles.css';
import * as Styled from './sytles.js';

const ButtonMain = ({children}) => {
    return (
        <Styled.ButtonPrin>
            {children}
        </Styled.ButtonPrin>
    );
}

export default ButtonMain;