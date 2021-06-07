import React from 'react';
import * as Styled from './sytles.js';

const WhiteButton = ({children}) => {
    return (
        <Styled.WhiteButton>
            {children}
        </Styled.WhiteButton>
    );
}

export default WhiteButton;