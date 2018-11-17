import React, {Component} from 'react';

class Corazon extends Component{
    render(){
        return(
            // desde portada le pase la propiedad style, es decir, un estilo en linea
            <div className="like is-liked" style={this.props.style}></div>
        );
    }
}

export default Corazon;