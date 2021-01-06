import { createStore, combineReducers } from 'redux'
import CustomerReducer from './reducers/CustomerReducer'

const store = createStore(
    combineReducers({customerState: CustomerReducer})
)

export default store