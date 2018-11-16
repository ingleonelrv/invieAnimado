import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';

// Es un componente que se encargara de proveer los datos
import {Provider} from 'react-redux';

// funcion para crear los almacenes de datos
import {createStore} from 'redux';

import Portada from './Components/Portada.js';
import Guitarras from './Components/Guitarras.js';
import Footer from './Components/Footer.js';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';

import cheet from 'cheet.js';


// data es un objeto menu es un key
const data = {
  menu : [{
    href: 'index.html',
    title: 'Home',
  },{
    href: '#guitarras',
    title: 'Guitarras',
  },{
    href: 'precios.html',
    title: 'Precios'
  }],
  logoPortada: logoPortada,
  // array[]
  guitarras : [
      {
          image: acustica,
          alt: 'Guitarra Invie Acustica',
          name: 'Invie Acustica',
          features: [
              'Estilo vintage',
              'Madera pura',
              'Incluye estuche invisible de aluminio',
          ]
      },
      {
        image: clasica,
        alt: 'Guitarra Invie Classic',
        name: 'Invie Classic',
        features: [
            'Estilo vintage',
            'Liviana',
            'Inicia tu camino como Rockstar',
        ]
    }
  ],
}

//recibe un estado, ejemplo la data como inicial y realiza una accion, ej actualizar o cambiar datos
function reducer(state, action){
    // definir el tipo de accion
    switch(action.type){
        case 'UPDATE_PROPS': {
            const newProps = action.payload.props;
            return { ...state, ...newProps}
        }
        default:
            return state
    }
}

// const store = createStore(reducer, initialstate); el reducer es el manejador, initialstate son los datos de arranque
const store = createStore(reducer, data);

//USO de cheet para escuchar una frase

const easter = {
    menu : [{
        href: 'index.html',
        title: 'Home',
      }],
}
cheet('i n v i e', () => {
    // console.log("Probando la frase");
    //
    store.dispatch({
        type: 'UPDATE_PROPS',
        // payload puede contener otro tipo de datos no solo propiedades
        payload: {
            props: easter
        }
    });
  });
  
  cheet('i n i c i o', () => {
    // console.log("Estado inicial");
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: data,
        }
    });
  });



ReactDOM.render(
    // el proveedor de datos de Invie debe recibir como propiedad un store o almacen de datos
    <Provider store={store}>
        <Invie />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
