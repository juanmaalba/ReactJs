import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';

let nombre = prompt('Ingrese su nombre')

function App() {
  return (
    <div className="App">
     <NavBar />
     <p>Holis</p>
     <p>Bienvenido a mi nueva app {nombre}!!</p>
     <p>Todavia no tengo mucha funcionalidad....</p>
    </div>
  );
}

export default App;
