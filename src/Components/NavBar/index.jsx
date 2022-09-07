import React from "react";
import CartWidget from "../CartWidget/Index";
export const NavBar = () =>{
    return(
        <ul className="nav justify-content-center m-3">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="1">HOME</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="1">PRODUCTS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="1">SOCIAL NETWORKS</a>
            </li>
            <li className="nav-item ms-3">
                <button type="button" className=" btn btn-primary "><CartWidget/></button>
            </li>        
        </ul>
    );
}
export default NavBar