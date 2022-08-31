import App from "../App";
import { Component } from "react";
class Input extends Component {
    render(){
        return(
            <input type="text" placeholder={this.props.valor} />
        )
    }
}

export default Input