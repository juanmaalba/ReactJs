import './index.jsx'
import React from "react";

const Item = ({info}) =>{
    return(
        
            <div className="d-flex justify-content-center" >       
                <a href="1" className="carta ">
                    <img className= "imagen" src={info.image} alt="" />
                    <h3>{info.title}</h3>
                </a>
            </div>
        
    );


}
export default Item;