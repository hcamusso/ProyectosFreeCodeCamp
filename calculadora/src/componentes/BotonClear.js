import React from 'react';
import '../hojasEstilos/BotonClear.css';
// Asignamos la funcion con un eventlisener
const BotonClear = (props) => (
    <div 
        className='boton-clear' 
        onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonClear;
