import axios from 'axios'
import { GET_ALL_PLANS, GET_ALL_USERS, GET_ALL_TRANSACTIONS, GET_ALL_BALANCES } from "./actions-type";

export const getAllUsers = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://backend-6ao2.onrender.com/usuarios/getAll');
            dispatch({
                type: GET_ALL_USERS,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getAllPlans = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://backend-6ao2.onrender.com/plans');
            dispatch({
                type: GET_ALL_PLANS,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getAllTransactions = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://backend-6ao2.onrender.com/transactions');
            dispatch({
                type: GET_ALL_TRANSACTIONS,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getAllBalances = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://backend-6ao2.onrender.com/saldos');
            console.log(data);
            dispatch({
                type: GET_ALL_BALANCES,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}


