import React from "react";
import Cart from "./Cart";

function NavBar(){
    return(
        <div className= "m-2">
            <nav className="navbar navbar-dark p-3 bg-info bg-opacity-5 border border-info border-start-0 rounded-end border-dark">
                <a className="navbar-brand text-dark" href="1">HOME</a>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">PRODUCTOS
                </button>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">PROMOCIONES
                </button>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">CONTACTO
                </button>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">NOSOTROS
                </button>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><Cart />
                </button>
                


                
            </nav>
        </div>
    );
}
export default NavBar;