import {
    SET_USER_ID,
    SET_USER_PASSWORD,
    SET_CURRENT_USER,
    SET_NEW_USER_ID,
    SET_NEW_USER_PASSWORD,
    SET_TELLER_DRAWER,
    CLEAR_USER
} from '../types'
export const SetUserId = (userId) => ({
    type: SET_USER_ID,
    payload: userId
})

export const SetUserPassword = (password) => ({
    type: SET_USER_PASSWORD,
    payload: password
})

export const SetNewUserId = (newUserId) => ({
    type: SET_NEW_USER_ID,
    payload: newUserId
})

export const SetNewUserPassword = (newUserPassword) => ({
    type: SET_NEW_USER_PASSWORD,
    payload: newUserPassword
})

export const SetCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
})

export const SetTellerDrawer = (amount) => ({
    type: SET_TELLER_DRAWER,
    payload: amount
})

export const ClearUser = () => ({
    type: CLEAR_USER
})