import React from 'react';
import * as Styled from './styles.js';

const Input = ({ children, onChange=null, value='' }) => {
    return (
        <Styled.Input 
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {children}
        </Styled.Input>
    );
}

export default Input;
