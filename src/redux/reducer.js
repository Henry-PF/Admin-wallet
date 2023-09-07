import { GET_ALL_BALANCES, GET_ALL_PLANS, GET_ALL_TRANSACTIONS, GET_ALL_USERS, SEARCH_USERS, SET_CURRENT_PAGE, UPDATE_USERS_DATA } from "./actions-type";

const initialState = {
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
            return {
                ...state,
                balances: action.payload,
            };
        default:
            return state
    }
}

export default rootReducer;