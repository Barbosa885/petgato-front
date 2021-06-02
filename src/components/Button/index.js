import React from 'react';
import './styles.css';

const ButtonMain = ({children}) => {
    return (
        <button class="btn">
            {children}
        </button>
    );
}

export default ButtonMain;