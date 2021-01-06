import { ADD_CUSTOMER, ADD_ACCOUNT, SEARCH_TERM } from '../types'

export const AddCustomer = (customer) => ({
    type: ADD_CUSTOMER,
    payload: customer
})

export const AddAccount = (account) => ({
    type: ADD_ACCOUNT,
    payload: account
})

export const SearchTerm = (term) => ({
    type: SEARCH_TERM,
    payload:term
})