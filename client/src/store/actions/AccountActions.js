import { SET_ACCOUNTS, SET_AMOUNT, SET_ACCOUNT_FROM, SET_ACCOUNT_TO, SET_ACCOUNT_TYPE_FROM, SET_ACCOUNT_TYPE_TO } from '../types'

export const SetAccounts = (accts) => ({
    type: SET_ACCOUNTS,
    payload: accts
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
