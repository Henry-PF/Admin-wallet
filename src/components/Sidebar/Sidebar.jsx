import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <>
            <nav className='w-auto vh-100' >
                <ul className="nav w-100 h-100 d-flex flex-column justify-content-center align-items-start position-relative">
                    <p className='position-absolute top-0 m-3 pt-4 fs-4 text-white text-center'>Panel de Administrador</p>
                    <li className="nav-item sidebar-item py-2 w-100">
                        <Link className="nav-link text-white" to="/admin/usuarios">
                            Usuarios
                        </Link>
                    </li>
                    <li className="nav-item sidebar-item py-2 w-100">
                        <Link className="nav-link text-white" to="/admin/transacciones">
                            Transacciones
                        </Link>
                    </li>

                    <li className="nav-item sidebar-item w-100 my-2 position-absolute bottom-0 ">
                        <button
                            className=" btn-exit"
                            onClick={() => {
                                localStorage.clear()
                                navigate('/')
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                            </svg> Salir
                        </button>
                    </li>
                </ul>
            </nav>


        </>
    )
}

export default Sidebar