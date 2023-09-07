import { GET_ALL_BALANCES, GET_ALL_PLANS, GET_ALL_TRANSACTIONS, GET_ALL_USERS, LOGIN_FAILURE, LOGIN_SUCCESS, SEARCH_TRANSACTION, SEARCH_USERS, SET_CURRENT_PAGE } from "./actions-type";

const initialState = {
    user: [],
    users: [],
    planes: [],
    balances: [],
    transactions: [],
    currentPage: 1,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_ALL_PLANS:
            return {
                ...state,
                planes: action.payload,
            }
        case GET_ALL_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload,
            }
        case GET_ALL_BALANCES:
            const data = action.payload
            const allBalances = data.data?.map(balance => balance.monto)
            const totalBalances = allBalances.reduce((acc, val) => acc + parseInt(val), 0)

            return {
                ...state,
                balances: totalBalances,
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload.users,
                currentPage: action.payload.currentPage,
            };
        // case SEARCH_TRANSACTION:
        //     return {
        //         ...state,
        //         transactions: action.payload.transactions,
        //         currentPage: action.payload.currentPage,
        //     };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    ...action.payload,
                    token: action.payload.token,
                },
                error: null,

            };
        case LOGIN_FAILURE:
            return {
                ...state,
                user: {
                    ...state.user,
                },
                error: action.payload,
            };
        default:
            return state
    }
}

export default rootReducer;