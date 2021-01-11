import { SET_USER_ID, SET_USER_PASSWORD, SET_CURRENT_USER, SET_NEW_USER_ID, SET_NEW_USER_PASSWORD, SET_TELLER_DRAWER } from '../types'
const iState = {
    userId: '',
    password: '',
    newUserId: '',
    newPassword: '',
    balance: '',
    currentUser: []
}

const TellerReducer = (state = iState, action) => {
    switch (action.type) {
        case SET_USER_ID:
            return { ...state, userId: action.payload }
        case SET_USER_PASSWORD:
            return { ...state, password: action.payload }
        case SET_NEW_USER_ID:
            return { ...state, newUserId: action.payload }
        case SET_NEW_USER_PASSWORD:
            return { ...state, newPassword: action.payload }
        case SET_CURRENT_USER:
            return { ...state, currentUser: state.currentUser.concat([action.payload]) }
        case SET_TELLER_DRAWER:
            return {...state, balance: action.payload}
        default:
            return { ...state }
    }
}

export default TellerReducer