import { WITHDRAW_ACCOUNT, NEW_AMOUNT_TO, NEW_AMOUNT_FROM, SET_ACCOUNTS } from '../types'

const iState = {
    amountTo: 0,
    amountFrom: 0,
    difference: 0,
    accounts: []

}

const AccountReducer = (state = iState, action) => {
    switch (action.type) {
        case SET_ACCOUNTS:
            return {...state, accounts: [...state.accounts, action.payload]}
        case NEW_AMOUNT_TO:
            return { ...state, amountTo: action.payload }
        case NEW_AMOUNT_FROM:
            console.log('inside from in reducer:', action)
            return { ...state, amountFrom: action.payload }
        case WITHDRAW_ACCOUNT:
            return { ...state, account: [...state.account, action.payload] }
        default:
            return { ...state }
    }
}

export default AccountReducer