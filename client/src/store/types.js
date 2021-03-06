export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const SEARCH_TERM = 'SEARCH_TERM'
export const ADD_FIRST_NAME = 'ADD_FIRST_NAME'
export const ADD_LAST_NAME = 'ADD_LAST_NAME'
export const ADD_DOB = 'ADD_DOB'
export const CLEAR_CUSTOMER = 'CLEAR_CUSTOMER'


// Teller Types
export const SET_USER_ID = 'SET_USER_ID'
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD'
export const SET_NEW_USER_ID = 'SET_NEW_USER_ID'
export const SET_NEW_USER_PASSWORD = 'SET_NEW_USER_PASSWORD'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_TELLER_DRAWER = 'SET_TELLER_DRAWER'
export const CLEAR_USER = 'CLEAR_USER'

// Account Types

// SET ACCOUNTS WILL RETURN AN ARRAY OF OBJECTS WITH CUSTOMER ACCOUNTS
export const SET_ACCOUNTS = 'SET_ACCOUNT'
// SETS THE AMOUNT THAT WILL BE WITHDRAWN/DEPOSIT
export const SET_AMOUNT = 'SET_AMOUNT'

// SETS ACCOUNT NUMBER FROM WHICH ACTION IS TAKEN: 
// FROM IS USED TO PREPARE FOR TRANSFER FUNCTION
export const SET_ACCOUNT_FROM = 'SET_ACCOUNT_FROM'

// SETS ACCOUNT NUMBER FROM WHICH ACTION IS TAKE:
// TO IS USED TO PEPARE FOR TRANSFER FUNCTION
export const SET_ACCOUNT_TO = 'SET_ACCOUNT_TO'

// SETS THE ACCOUNT TYPE FROM WHICH ACTION IS TAKEN:
// WILL USE TO AND FROM TO PEPARE FOR TRANSFER FUNCTION
export const SET_ACCOUNT_TYPE_FROM = 'SET_ACCOUNT_TYPE_FROM'

// SETS THE ACCOUNT TYPE TO WHICH ACTION IS TAKEN
export const SET_ACCOUNT_TYPE_TO = 'SET_ACCOUNT_TYPE_TO'
// USED TO CLEAR CURRENT CUSTOMER SEESION
export const CLEAR_ACCOUNTS = 'CLEAR_ACCOUNTS'
// USED TO UPDATE ACCOUNT
export const UPDATE_ACCOUNT_BALANCE = 'UPDATE_ACCOUNT_BALANCE'