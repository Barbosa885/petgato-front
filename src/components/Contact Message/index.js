import React from 'react';
import * as Styled from './styles.js';

const Message = ({children}) => {
    return (
        <Styled.Message placeholder="Digite aqui a sua meow-sagem...">
            {children}
        </Styled.Message>
    );
}

export default Message;