import './App.css';
import ListaTarea from './component/ListaTareas';
import logo from "./img/freecodecamp-logo.png";

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={logo} 
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTarea />
      </div>
    </div>
  );
}

export default App;