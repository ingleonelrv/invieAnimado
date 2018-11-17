// Component es un metodo de React y va entre {}
import React, {Component} from 'react';

// esta importacion me servira para poder conectarme a mi store en index.js
import {connect} from 'react-redux';

//para crear las animaciones de las guitarras, debo asegurarme de instalarlo antes en este proyecto
import { CSSTransitionGroup } from 'react-transition-group';
import Corazon from './Corazon';

//surge de la conexion establecida en el export, y viene con un parametro
function mapStateToProps(state){
    return{
        logo: state.logoPortada,
        menu: state.menu,
        isAnimated: state.isAnimated,
    }
}

class Portada extends Component{
    renderCorazon(){
        // creo una matriz de 10 elementos y lo lleno con ""
        const corazones = new Array(100).fill({});
        return(
            corazones.map((elment, index) => {
                const style = {
                    left: Math.floor((Math.random() * (window.innerWidth - 0))) +0  + "px",
                    // el delay hace que no salgan al mismo tiempo
                    // los corazones que estan en espera aparecen en la pantalla, los ocultamos en CSS
                    animationDelay: Math.floor((Math.random() * (10000 - 0))) +0  + "ms",
                }
                return(
                    // para dibujar siempre necesita un key
                    <Corazon key={index} style={style} />
                );
            })
        );
    }
    // render es una funcion que siempre debe retur() algo
    render(){
        return(
            // Aqui va todo mi codigo html
            // nota con las comillas para combinar texto y variable, son las que estan antes del 1
            <section id="portada" className={`portada background ${this.props.isAnimated}`}>
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
                <CSSTransitionGroup
                    transitionName="animationInOut"
                    transitonEnterTimeOut={800}
                    transitonLeaveTimeOut={800}
                >
                    {/* condicion: Si isAnimated  (!this.props.isAnimated) entonces quitalo */}
                    {
                        !this.props.isAnimated &&
                        <div className="contenedor" key="portada">
                            <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                            <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
                            <a className="button" href="#guitarras">Conoce mas</a>
                        </div>
                    }
                </CSSTransitionGroup>

                {/* cuando se lanza el easter isAnimated pasa a positivo y el If abajo puede ejecutar Corazon */}
                {
                    this.props.isAnimated &&
                    // si hace easter llamar la funcion renderCorazon
                    this.renderCorazon()
                }
            </section>
        );
    }
}

// de esta forma nos conectamos al store
export default connect(mapStateToProps)(Portada);
// export default Portada;