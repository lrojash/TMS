import {
    SET_ACCOUNTS,
    SET_AMOUNT,
    SET_ACCOUNT_FROM,
    SET_ACCOUNT_TO,
    SET_ACCOUNT_TYPE_FROM,
    SET_ACCOUNT_TYPE_TO,
    CLEAR_ACCOUNTS,
    UPDATE_ACCOUNT_BALANCE
} from '../types'

const modifyType = (type) => {
    return type.toLowerCase().substring(0, type.length - 1)
}

const iState = {
    accounts: [],
    amount: 0,

    accountFrom: '',
    accountTo: '',

    accountTypeFrom: '',
    accountTypeTo: '',

    updatedAccount: ''
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
        case CLEAR_ACCOUNTS:
            return { ...state, accounts: [] }
        case UPDATE_ACCOUNT_BALANCE:
            let type = modifyType(action.payload.type)
            let updatedAccount = state.accounts[0][type].map((account, i) => {
                if (account.checking_number === action.payload.account || account.saving_number === action.payload.account) {
                    account.balance = action.payload.balance
                }
            })
            return { ...state, accounts: [...state.accounts] }
        default:
            return { ...state }
    }
}

export default AccountReducer