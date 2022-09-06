import React from "react";
import Cart from "./Cart";

const NavBar =({item1,item2,item3,item4}) =>{
    
    return(
        <div className= "m-2">
            <nav className="navbar navbar-dark p-3 bg-info bg-opacity-5 border border-info border-start-0 rounded-end border-dark">
                <a className="navbar-brand text-dark" href="!#">HOME</a>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">{item1}
                </button>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">{item2}
                </button>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">{item3}
                </button>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">{item4}
                </button>
                <button className="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                </button>
            </nav>
        </div>
    );
}
export default NavBar;