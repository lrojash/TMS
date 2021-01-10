import { ADD_CUSTOMER, ADD_ACCOUNT, SEARCH_TERM, ADD_FIRST_NAME, ADD_LAST_NAME, ADD_DOB } from '../types'

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
    payload: term
})

export const AddFirstName = (name) => ({
    type: ADD_FIRST_NAME,
    payload: name
})

export const AddLastName = (name) => ({
    type: ADD_LAST_NAME,
    payload: name
})

export const AddDob = (dob) => ({
    type: ADD_DOB,
    payload: dob
})