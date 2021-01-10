import { ADD_CUSTOMER, ADD_ACCOUNT, SEARCH_TERM, ADD_FIRST_NAME, ADD_LAST_NAME, ADD_DOB } from '../types'

const iState = {
    searchTerm: '',
    customer: [],
    accounts: [],
    firstName: '',
    lastName: '',
    dob: ''
}

const CustomerReducer = (state = iState, action) => {
    switch (action.type) {
        case SEARCH_TERM:
            return { ...state, searchTerm: action.payload }
        case ADD_FIRST_NAME:
            return {...state, firstName: action.payload}
        case ADD_LAST_NAME: 
            return {...state, lastName: action.payload}
        case ADD_DOB:
            return {...state, dob: action.payload}
        case ADD_CUSTOMER:
            return { ...state, customer: [...state.customer, action.payload] }
        case ADD_ACCOUNT:
            return { ...state, accounts: [...state.accounts, action.payload] }
        default:
            return { ...state }
    }

}

export default CustomerReducer