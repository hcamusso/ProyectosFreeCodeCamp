import React from 'react';
import '../hojasEstilos/Boton.css';

export default function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
  return (
    // le agregamos el manejador del evento onClick para que reaccione al presionar cada boton
    <button 
      className={`botonContenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}> 
      {props.children}
    </button>
  );
}
