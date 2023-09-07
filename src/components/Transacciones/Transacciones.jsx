import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import { getAllTransactions } from '../../redux/actions';

const Transacciones = () => {
    const dispatch = useDispatch();
    const transactions = useSelector(state => state.transactions);

    useEffect(() => {
        dispatch(getAllTransactions());
    }, [dispatch])

    return (
        <>
            <div className="container-fluid">
                <div className='row vh-100'>
                    <div className="sidebar col-auto px-0 min-vh-100 bg-dark">
                        <Sidebar />
                    </div>
                    <div className="col d-flex align-items-center justify-content-center flex-column">
                        <div className='m-2'>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar por Emisor" aria-label="Search" />
                                <input className="form-control me-2" type="search" placeholder="Buscar por Destinatario" aria-label="Search" />
                                <input className="form-control me-2" type="search" placeholder="Buscar por Monto" aria-label="Search" />
                                <input className="form-control me-2" type="search" placeholder="Buscar por Fecha" aria-label="Search" />
                                <button className="btn btn-outline-dark" type="submit">Buscar</button>
                            </form>

                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Emisor</th>
                                    <th scope="col">Destinatario</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transactions?.map((transaction, index) => (
                                        <tr>
                                            <th scope="row">{index}</th>
                                            <td>{transaction.id}</td>
                                            <td>{transaction.id}</td>
                                            <td>{transaction.id}</td>
                                            <td>{transaction.monto}</td>
                                            <td>{transaction.fecha}</td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
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