import React, { Component } from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './Components/Portada.js';
import Guitarras from './Components/Guitarras.js';
import Footer from './Components/Footer.js';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';

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

class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/* Portada */}
        <Portada menu={data.menu} logo={data.logoPortada} />
        {/* Guitarras */}
        <Guitarras guitarras={data.guitarras}/>
        {/* Footer */}
        <Footer />
      </section>
    );
  }
}

export default App;
