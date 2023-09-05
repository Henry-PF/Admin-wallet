import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Usuarios from './components/Usuarios/Usuarios';
import Transacciones from './components/Transacciones/Transacciones';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/usuarios' element={<Usuarios />} />
        <Route path='/admin/transacciones' element={<Transacciones />} />
      </Routes>
    </div>
  );
}

export default App;
