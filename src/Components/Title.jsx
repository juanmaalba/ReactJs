import React from "react";
import { Component } from "react";
class Title extends Component {
    render(){
        return(
            <h1>{this.props.valor}</h1>
        )
    }
}

export default Title