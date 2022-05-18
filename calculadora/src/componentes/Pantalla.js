import React from 'react';
import '../hojasEstilos/Pantalla.css'

const Pantalla = ({input}) => (
  <div className='input'>
    {input}
  </div>
);
export default Pantalla;
//se utiliza esta forma de escribir el componente cuando son
//mas sencillos solo tienen una presentacion no tienen mucha logica