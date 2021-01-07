import { SET_USER_ID, SET_USER_PASSWORD, SET_CURRENT_USER, SET_NEW_USER_ID, SET_NEW_USER_PASSWORD } from '../types'


export const setUserId = (userId) => ({
    type: SET_USER_ID,
    payload: userId
})

export const setUserPassword = (password) => ({
    type: SET_USER_PASSWORD,
    payload: password
})

export const setNewUserId = (newUserId) => ({
    type: SET_NEW_USER_ID,
    payload: newUserId
})

export const setNewUserPassword = (newUserPassword) => ({
    type: SET_NEW_USER_PASSWORD,
    payload: newUserPassword
})

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
})