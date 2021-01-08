import { SET_ACCOUNTS, SET_AMOUNT, SET_ACCOUNT_FROM, SET_ACCOUNT_TO, SET_ACCOUNT_TYPE_FROM, SET_ACCOUNT_TYPE_TO } from '../types'

const iState = {
    accounts: [],
    amount: 0,

    accountFrom: '',
    accountTo: '',

    accountTypeFrom: '',
    accountTypeTo: ''

}

const AccountReducer = (state = iState, action) => {
    switch (action.type) {
        case SET_ACCOUNTS:
            return { ...state, accounts: [...state.accounts, action.payload] }
        case SET_AMOUNT:
            return { ...state, amount: action.payload }
        case SET_ACCOUNT_FROM:
            return { ...state, accountFrom: action.payload }
        case SET_ACCOUNT_TO:
            return { ...state, accountTo: action.payload }
        case SET_ACCOUNT_TYPE_FROM:
            return { ...state, accountTypeFrom: action.payload }
        case SET_ACCOUNT_TYPE_TO:
            return { ...state, accountTypeTo: action.payload }
        default:
            return { ...state }
    }
}

export default AccountReducer