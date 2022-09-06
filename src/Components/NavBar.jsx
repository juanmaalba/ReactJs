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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag"        viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                </button>
            </nav>
        </div>
    );
}
export default NavBar;