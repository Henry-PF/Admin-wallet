import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Transacciones = () => {
    return (
        <>
            <div className="container-fluid">
                <div className='row vh-100'>
                    <div className="sidebar col-auto px-0 min-vh-100 bg-dark">
                        <Sidebar />
                    </div>
                    <div className="col d-flex align-items-center justify-content-center flex-column">
                        <div className='m-2'>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Buscar por Emisor" aria-label="Search" />
                                <input class="form-control me-2" type="search" placeholder="Buscar por Destinatario" aria-label="Search" />
                                <input class="form-control me-2" type="search" placeholder="Buscar por Monto" aria-label="Search" />
                                <input class="form-control me-2" type="search" placeholder="Buscar por Fecha" aria-label="Search" />
                                <button class="btn btn-outline-dark" type="submit">Buscar</button>
                            </form>

                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Emisor</th>
                                    <th scope="col">Destinatario</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td colspan="2"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td colspan="2"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td colspan="2"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td colspan="2"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td colspan="2"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td colspan="2"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td colspan="2"></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transacciones