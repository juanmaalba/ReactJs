import logo from './logo.svg';
import './App.css';

let nombre = prompt('Ingrese su nombre')

function App() {
  return (
    <div className="App">
     <p>Holis</p>
     <p>Bienvenido a mi nueva app {nombre}!!</p>
     <p>Todavia no tengo mucha funcionalidad....</p>
    </div>
  );
}

export default App;
