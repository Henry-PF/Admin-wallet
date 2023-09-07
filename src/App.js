import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Usuarios from './components/Usuarios/Usuarios';
import Transacciones from './components/Transacciones/Transacciones';
import Planes from './components/Planes/Planes';
import './App.css';
import Login from './Login/Login';
import ProtectedRoutes from './components/ProtecterRoutes/ProtectedRoutes';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
        </Route>
        <Route path='/admin' element={<Home />} />
        <Route path='/admin/usuarios' element={<Usuarios />} />
        <Route path='/admin/transacciones' element={<Transacciones />} />
        <Route path='/admin/planes' element={<Planes />} />
      </Routes>
    </div>
  );
}

export default App;
