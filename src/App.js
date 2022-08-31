import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Footer from './Components/Footer';
function App() {
  
  return (
    <div>
      <NavBar item1 = 'PRODUCTOS' item2= 'PROMOCIONES' item3= 'CONTACTO' item4 = 'NOSOTROS'/>
      <Main nombre= 'productos'/>
      <Footer saludo= 'Gracias por visitarnos!!'/>
    </div>
  );
}

export default App;
