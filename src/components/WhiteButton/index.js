import React from 'react';
import * as Styled from './sytles.js';

const WhiteButton = ({ children, onClick=null }) => {
    return (
        <Styled.WhiteButton onClick={onClick} >
            {children}
        </Styled.WhiteButton>
    );
}

export default WhiteButton;