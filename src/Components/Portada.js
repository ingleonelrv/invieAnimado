// Component es un metodo de React y va entre {}
import React, {Component} from 'react';

// esta importacion me servira para poder conectarme a mi store en index.js
import {connect} from 'react-redux';

//para crear las animaciones de las guitarras, debo asegurarme de instalarlo antes en este proyecto
import { CSSTransitionGroup } from 'react-transition-group';

//surge de la conexion establecida en el export, y viene con un parametro
function mapStateToProps(state){
    return{
        logo: state.logoPortada,
        menu: state.menu,
        isAnimated: state.isAnimated,
    }
}

class Portada extends Component{
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
            </section>
        );
    }
}

// de esta forma nos conectamos al store
export default connect(mapStateToProps)(Portada);
// export default Portada;