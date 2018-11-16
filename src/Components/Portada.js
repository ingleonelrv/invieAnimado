// Component es un metodo de React y va entre {}
import React, {Component} from 'react';

// esta importacion me servira para poder conectarme a mi store en index.js
import {connect} from 'react-redux';

//surge de la conexion establecida en el export, y viene con un parametro
function mapStateToProps(state){
    return{
        logo: state.logoPortada,
        menu: state.menu,
    }
}

class Portada extends Component{
    // render es una funcion que siempre debe retur() algo
    render(){
        return(
            // Aqui va todo mi codigo html
            <section id="portada" className="portada background">
                <header id="header" className="header contenedor">
                    <figure className="logotipo">
                    <img src={this.props.logo} width="186" height="60" alt="Invie logotipo"/>
                    </figure>
                    <span className="burguer-button icon-menu" id="burguer-button"></span>
                    <nav className="menu" id="menu">
                    <ul>
                    {/* this.props.menu viene desde Invie.js como propiedad */}
                        {this.props.menu.map((item) => { 
                            return(
                                <li>
                                    <a href={item.href}>{item.title}</a>
                                </li>
                            )        
                        })}
                    </ul>
                    </nav>
                </header>
                <div className="contenedor">
                    <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                    <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
                    <a className="button" href="#guitarras">Conoce mas</a>
                </div>
            </section>
        );
    }
}

// de esta forma nos conectamos al store
export default connect(mapStateToProps)(Portada);
// export default Portada;