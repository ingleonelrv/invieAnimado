import React,{Component} from 'react';

//para crear las animaciones de las guitarras, debo asegurarme de instalarlo antes en este proyecto
import { CSSTransitionGroup } from 'react-transition-group';

// esta importacion me servira para poder conectarme a mi store en index.js
import {connect} from 'react-redux';

//surge de la conexion establecida en el export hacia el index, y viene con un parametro
function mapStateToProps(state){
    return{
        guitarras: state.guitarras,
    }
}

class Guitarras extends Component{
    render(){
        return(
            <section id="guitarras" className="guitarras contenedor">
                <h2>Nuestra guitarras</h2>
                <div className="video-demo-contenedor">
                    <div className="video-demo">
                    <div className="video-responsive-contenedor">
                        <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                {/* <!-- <video src="video/320x240.ogg"></video> --> */}
                {this.props.guitarras.map((guitarra,index) => {
                    return(
                        <article className="guitarra" key={index}>
                            {/* con el CSSTransitionGroup es como entra una imagen y sale otra, sin este se quedan superpuestas */}
                            <CSSTransitionGroup
                                transitionName= "flicker"
                                // el tiempo de entrada e ida va acorde al tiempo de la animation.css
                                transitonEnterTimeOut={500}
                                transitonLeaveTimeOut={500}
                            >
                                {/* para q haya un cambio con CSSTransitionGroup debe haber un key en img */}
                                <img className="guitarra-image" key={guitarra.image} src={guitarra.image}  alt={guitarra.alt} width="350"/>
                            </CSSTransitionGroup>
                            <CSSTransitionGroup
                                transitionName="fade"
                                transitonEnterTimeOut={300}
                                // transitonLeaveTimeOut={300}
                                // transitionLeave={false} solo me deja mi transition de entrada asi no chocan en el cambio
                                transitionLeave={false}
                            >
                                <div className="contenedor-guitarra" key={guitarra.name}>
                                <h3 className="guitarra-name">{guitarra.name}</h3>
                                <ol>
                                    {guitarra.features.map((feature,index) => {
                                        return(
                                            <li key={index}>{feature}</li>
                                        );
                                    })}
                                </ol>
                                </div>
                            </CSSTransitionGroup>
                        </article>
                    );
                })}
            </section>
        );
    }
}
export default connect(mapStateToProps)(Guitarras);