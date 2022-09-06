import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Contador from './Components/Contador';
function App() {
  const valor = (cantidad) =>{
    console.log(`Agregaste ${cantidad} unidades`);
  }
  return (
    <div>
      <NavBar item1 = {'PRODUCTOS'} item2= {'PROMOCIONES'} item3= {'CONTACTO'} item4 = {'NOSOTROS'}/>
      <Contador iniciar ={1} stock={10} valor= {valor}/>
      <Main nombre= {'productos'}/>
      <Footer saludo= {'Gracias por visitarnos!!'}/>
    </div>
  )
}

export default App;
