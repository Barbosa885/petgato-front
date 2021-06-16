import React from 'react';
import * as Styled from './styles.js';

const InputText = ({children, value, onChange, ...props}) => {
    // Logica para arrumar o Input text com JS puro, mas 
    // que não funciona com o React ( e não achei outra solução)
    // arrumei o problema com CSS puro mesmo;
    // const inputs = document.querySelectorAll('input');

    // inputs.forEach(el =>{
    //     el.addEventListener('blur', e => {
    //         if(e.target.value ){
    //             e.target.classList.add('dirty');
    //         } else {
    //             e.target.classList.remove('dirty');
    //         }
    //     })
    // });

    return (
        <Styled.InputdeTexto>
            <input value={value} onChange={e => onChange(e.target.value)} type='text' required {...props}/>
            <span>{children}</span>
        </Styled.InputdeTexto>
    );
}



export default InputText