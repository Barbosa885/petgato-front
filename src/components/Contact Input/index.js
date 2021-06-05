import React from 'react';
import * as Styled from './styles.js';

const Input = ({children}) => {
    return (
        <Styled.Input>
            {children}
        </Styled.Input>
    );
}

export default Input;