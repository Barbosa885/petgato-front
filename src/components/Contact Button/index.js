import React from 'react';
import * as Styled from './styles.js';

const Button = ({children}) => {
    return (
        <Styled.Button>
            {children}
        </Styled.Button>
    );
}

export default Button;