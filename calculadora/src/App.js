import style from './App.module.css';
import freeCodeCampLogo from './imagenes/Logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState} from 'react';
import { evaluate } from 'mathjs';


function App() {
  const[input, setInput] = useState(''); // estado del componente, lo q elusario ingreso hasta el momento

  const agregarInput = val => { //la funcion toma val y ejecuta lo de adentro de las llaves, actualiza el input y se le pasa como actualizar input + val
    setInput(input + val);
  }
  
  // esta funcion evalua el resultad, lo calcula, la funcion evaluate la conseguimos
  // de mathjs
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores correctos para efectuar el calculo')
    }
  };

  return (
    <div className={style.App}>
      <div className={style.freecodecampLogoContenedor}>
        <img 
          src={freeCodeCampLogo}
          className={style.freecodecampLogo}
          alt='Logo de Freecodecamp'
        />
      </div>
      <div className={style.contendorCalculadora}>
        <Pantalla input={input}/>  {/* se le pasa el prop y el estado */}
        <div className={style.fila}> 
        {/* le agregamos un props a cada componente le pasamos manejarclic que llamara a la funcion agregarInput  */}
       {/*  */}
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className={style.fila}>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className={style.fila}>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>     
        </div>
        <div className={style.fila}>
          {/* Al hacer click en el igual queremos que se calcule el resultado, vamos a reemplazar
          aggregarImput por otra funcion calcularResultado */}
          {/* <Boton manejarClic={agregarInput}>=</Boton> */}
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className={style.fila}>
          {/* En el Boton clear definimos un funcion sencilla directamente, manejarClear 
          es un funcion flecha que va a reiniciar el imput con setimput a una cadena de caracteres 
          vacio */}
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
        
      </div>
    </div>
  );
}

export default App;
