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

export const SetAccounts = (checking, saving) => ({
    type: SET_ACCOUNTS,
    payload: {
        checking,
        saving
    }
})

export const SetAmount = (amount) => ({
    type: SET_AMOUNT,
    payload: amount
})

export const SetAccountFrom = (acctNum) => ({
    type: SET_ACCOUNT_FROM,
    payload: acctNum
})

export const SetAccountTo = (acctNum) => ({
    type: SET_ACCOUNT_TO,
    payload: acctNum
})

export const SetAccountTypeFrom = (type) => ({
    type: SET_ACCOUNT_TYPE_FROM,
    payload: type
})

export const SetAccountTypeTo = (type) => ({
    type: SET_ACCOUNT_TYPE_TO,
    payload: type
})
export const ClearAccounts = () => ({
    type: CLEAR_ACCOUNTS
})
export const UpdateBalance = (account, balance, type) => ({
    type: UPDATE_ACCOUNT_BALANCE,
    payload: {
        account,
        balance,
        type
    }
})