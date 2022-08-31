import React from "react";

const Footer = (saludo)=>{
        return(
        <div >
           <hr/>
           <div className="card text-center">
                <div class="card-header">
                        
                </div>
                <div className="card-body">
                <h3 className="card-title">{saludo}</h3>
                <p className="card-text">Con mucho apoyo de nuestros inversores logramos ser de los mejores</p>
                </div>
                <div className="card-footer text-muted">
                10 años en el negocio!
                </div>
                </div>
        </div>)
        
}   
export default Footer;