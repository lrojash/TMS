import { ADD_CUSTOMER, ADD_ACCOUNT, SEARCH_TERM } from '../types'

const iState = {
    searchTerm: '',
    customer: [],
    accounts: [],
}

const CustomerReducer = (state = iState, action) => {
    switch (action.type) {
        case SEARCH_TERM:
            return { ...state, searchTerm: action.payload }
        case ADD_CUSTOMER:
            return { ...state, customer: [...state.customer, action.payload] }
        case ADD_ACCOUNT:
            return { ...state, accounts: [...state.accounts, action.payload] }
        default:
            return { ...state }
    }

}

export default CustomerReducer