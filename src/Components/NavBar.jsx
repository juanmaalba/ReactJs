import App from "../App";

function NavBar(){
    return(
        <div class= "m-2">
            <nav class="navbar navbar-dark p-3 bg-info bg-opacity-5 border border-info border-start-0 rounded-end border-dark">
                <a class="navbar-brand text-dark" href="#">HOME</a>
                <button class="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">PRODUCTOS
                </button>
                <button class="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">PROMOCIONES
                </button>
                <button class="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">CONTACTO
                </button>
                <button class="navbar-toggler text-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">NOSOTROS
                </button>
            </nav>
        </div>
    );
}
export default NavBar;