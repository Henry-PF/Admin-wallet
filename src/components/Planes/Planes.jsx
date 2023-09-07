import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import { getAllPlans } from '../../redux/actions'
import FormPlans from './FormPlans'
import FormDelete from './FormDelete'
import FormEdit from './FormEdit'

const Planes = () => {
    const dispatch = useDispatch();
    const planes = useSelector(state => state.planes)

    useEffect(() => {
        dispatch(getAllPlans());
    }, [dispatch]);

    return (
        <>
            <div className="container-fluid">
                <div className='row vh-100'>
                    <div className="sidebar col-auto px-0 min-vh-100 bg-dark position-sticky top-0 ">
                        <Sidebar />
                    </div>
                    <div className="col d-flex align-items-center flex-column h-100 overflow-auto">
                        <div className="row m-2">
                            <div className="col">
                                <FormPlans />
                            </div>
                        </div>
                        <div className="row w-100 ">
                            <div className="col">

                                <h1 className='text-center'>Planes</h1>
                                <table className="table table-striped">
                                    <thead>
                                        <tr className=' justify-content-center text-center'>
                                            <th scope="col">#</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Costo $</th>
                                            <th scope="col">Duración</th>
                                            <th scope="col">Detalle</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            planes?.map((plan, index) => (
                                                <tr className='text-center' key={plan.id}>
                                                    <th scope="row">{index}</th>
                                                    <td>{plan.id}</td>
                                                    <td>{plan.nombre}</td>
                                                    <td>{plan.costo}</td>
                                                    <td>{plan.duracion}</td>
                                                    <td>{plan.planes_detalles[0]?.contenido}</td>
                                                    <td className='p-0 m-0'>
                                                        <FormEdit
                                                            id={plan.id}
                                                            nombre={plan.nombre}
                                                            costo={plan.costo}
                                                            duracion={plan.duracion}
                                                            contenido={plan.planes_detalles[0]?.contenido}
                                                        />
                                                        <FormDelete id={plan.id} />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Planes