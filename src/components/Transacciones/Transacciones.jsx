import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import { getAllTransactions, searchTransactions, setCurrentPage } from '../../redux/actions';


const Transacciones = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        emisor: '',
        receptor: '',
        monto: '',
        fecha: ''
    });
    const transactions = useSelector(state => state.transactions);
    const currentPage = useSelector(state => state.currentPage)
    const itemsPerPage = 10;

    console.log(transactions);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = transactions?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(transactions?.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        dispatch(setCurrentPage(newPage))
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { emisor, receptor, monto, fecha } = data;

        const datos = {
            emisor, receptor, monto, fecha
        }
        // dispatch(searchTransactions(datos));
        dispatch(setCurrentPage(1))
    };

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
                            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    name='emisor'
                                    placeholder="Buscar por Emisor..."
                                    value={data.emisor}
                                    onChange={handleChange}
                                    aria-label="Search"
                                />
                                <input
                                    className="form-control me-2"
                                    name='receptor'
                                    value={data.receptor}
                                    onChange={handleChange}
                                    type="search"
                                    placeholder="Buscar por Receptor"
                                    aria-label="Search" />
                                <input
                                    className="form-control me-2"
                                    name='monto'
                                    value={data.monto}
                                    onChange={handleChange}
                                    type="search"
                                    placeholder="Buscar por Correo Electronico" aria-label="Search" />
                                <input
                                    className="form-control me-2"
                                    name='fecha'
                                    value={data.fecha}
                                    onChange={handleChange}
                                    type="search"
                                    placeholder="Buscar por Correo Fecha" aria-label="Search" />
                                <button
                                    className="btn btn-outline-dark"
                                    type="submit"
                                >Buscar</button>
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
                                    currentItems?.map((transaction, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index}</th>
                                            <td>{transaction.id}</td>
                                            <td>{transaction.id_usuario_emisor}</td>
                                            <td>{transaction.id_usuario_receptor}</td>
                                            <td>{transaction.monto}</td>
                                            <td>{transaction.fecha}</td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                                        <a className="page-link" href="#" onClick={() => handlePageChange(index + 1)}>
                                            {index + 1}
                                        </a>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button className="page-link" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </button>
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