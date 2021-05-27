import React from 'react';
import './styles.css';

const InputText = ({children}) => {
    return (
        <>
            <p className='tituloInput'>{children}</p>
            <input className='TextInput' type='text' />
        </>
    );
}









export default InputText