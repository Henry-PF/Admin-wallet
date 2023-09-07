import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions';
import './usuarios.css';

const inconBan = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>

const iconEdit = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" /></svg>

const iconDelete = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>


const Usuarios = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [data, setData] = useState({
        usuario: '',
        nombre: '',
        email: '',
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    }

    const handleSubmit = () => {

    }

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <>
            <div className="container-fluid">
                <div className='row vh-100'>
                    <div className="sidebar col-auto px-0 min-vh-100 bg-dark">
                        <Sidebar />
                    </div>
                    <div className="col d-flex align-items-center justify-content-center flex-column">
                        <div className='m-2'>
                            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    name='usuario'
                                    placeholder="Buscar por Usuario..."
                                    value={data.usuario}
                                    onChange={handleChange}
                                    aria-label="Search"
                                />
                                <input
                                    className="form-control me-2"
                                    name='nombre'
                                    value={data.nombre}
                                    onChange={handleChange}
                                    type="search"
                                    placeholder="Buscar por Nombre"
                                    aria-label="Search" />
                                <input
                                    className="form-control me-2"
                                    name='email'
                                    value={data.email}
                                    onChange={handleChange}
                                    type="search"
                                    placeholder="Buscar por Correo Electronico" aria-label="Search" />
                                <button
                                    className="btn btn-outline-dark"
                                    type="submit"
                                >Buscar</button>
                            </form>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">ID</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Nombre y Apellido</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data?.map((user) => (
                                    <tr className='text-center' key={user.id}>
                                        <td>{user.datos_persona.id}</td>
                                        <td>{user.nombre_usuario}</td>
                                        <td>{user.datos_persona.nombre} {user.datos_persona.apellido}</td>
                                        <td>{user.datos_persona.correo_electronico}</td>
                                        <td>{iconEdit}</td>
                                        <td>{inconBan}</td>
                                        <td>{iconDelete}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Usuarios;

