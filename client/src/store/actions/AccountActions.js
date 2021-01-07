import {WITHDRAW_ACCOUNT, NEW_AMOUNT_TO, NEW_AMOUNT_FROM, SET_ACCOUNTS} from '../types'

export const NewAmountTo = (amount) => ({
    type: NEW_AMOUNT_TO,
    payload: amount
})
export const NewAmountFrom = (amount) => ({
    type: NEW_AMOUNT_FROM,
    payload: amount
})

export const WithdrawAccount = (account) => ({
    type: WITHDRAW_ACCOUNT,
    payload: account
})

export const SetAccounts = (accounts) => ({
    type: SET_ACCOUNTS,
    payload: accounts
})