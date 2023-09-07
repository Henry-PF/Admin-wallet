import React, { useEffect } from 'react'
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions';

const UserGraph = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const balances = useSelector(state => state.balances)
    const transactions = useSelector(state => state.balances)
    const userLength = users.data?.length;

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const data = [
        ["Mes", "Usuarios", "Saldo", "Transferencias"],
        ["Septiembre", userLength, balances, transactions],
        ["Octubre", 0, 0, 0],
        ["Noviembre", 0, 0, 0],
        ["Diciembre", 0, 0, 0],
    ];

    const options = {
        chart: {
            title: "Datos totales",
            subtitle: "Mes Septiembre",
        },
    };
    return (
        <div>
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    )
}

export default UserGraph
