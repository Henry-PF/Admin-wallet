import axios from 'axios'
import { GET_ALL_PLANS, GET_ALL_USERS, GET_ALL_TRANSACTIONS, SEARCH_USERS, SET_CURRENT_PAGE, GET_ALL_BALANCES, SEARCH_TRANSACTION, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions-type";

export const getAllUsers = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://backend-6du3.onrender.com/usuarios/getAll');
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
            const { data } = await axios.get('https://backend-6du3.onrender.com/plans');
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
            const { data } = await axios.get('https://backend-6du3.onrender.com/transactions');
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
            const response = await axios.get('https://backend-6du3.onrender.com/saldos');

            dispatch({
                type: GET_ALL_BALANCES,
                payload: response.data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const searchUsers = (filteredUsers) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://backend-6du3.onrender.com/usuarios/filter', {
                params: filteredUsers,
            });

            dispatch({
                type: SEARCH_USERS,
                payload: {
                    users: response,
                    currentPage: 1,
                }
            });
        } catch (error) {
            console.error(error);
        }
    };
};

// export const searchTransactions = (filteredTransaction) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get('https://backend-6du3.onrender.com/transactions/search', {
//                 params: filteredTransaction,
//             });

//             dispatch({
//                 type: SEARCH_TRANSACTION,
//                 payload: {
//                     users: response,
//                     currentPage: 1,
//                 }
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     };
// };

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    };
};

export const userLogin = (email, password) => async (dispatch) => {
    try {
        const { data } = await axios.post('https://backend-6du3.onrender.com/auth/login', {
            user: email,
            pass: password,
        });
        console.log(data);
        const { token } = data;

        localStorage.setItem('accessToken', token);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.message,
        });
    }
};

