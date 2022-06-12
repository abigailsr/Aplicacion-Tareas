import './App.css';
import logo from "./imagenes/logo.png";
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
    <div className='logo-contenedor'>
    <h2>Aplicacion de tareas con ReactJS</h2>
      <img 
      src={logo}
        className="logo"
        alt="logo"
      />
    </div>
    <div className='tareas-lista-principal'>
    <h1>Mis Tareas</h1>
    <ListaDeTareas/>
    </div>
    </div>
  );
}

export default App;
