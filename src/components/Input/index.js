
import React from 'react';
import './styles.css';

const InputText = ({children}) => {
    return (
        <label className='customizar'>
            <input className='TextInput' type='text' required />
            <span className='tituloInput'>{children}</span>
        </label>
    );
}

export default InputText