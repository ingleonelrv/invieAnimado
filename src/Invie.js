import React, { Component } from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './Components/Portada.js';
import Guitarras from './Components/Guitarras.js';
import Footer from './Components/Footer.js';

class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/* Portada */}
        <Portada />
        {/* Guitarras */}
        <Guitarras />
        {/* Footer */}
        <Footer />
      </section>
    );
  }
}

export default App;
