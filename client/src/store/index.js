import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import CustomerReducer from './reducers/CustomerReducer'
import AccountReducer from './reducers/AccountReducer'
import TellerReducer from './reducers/TellerReducer'

const store = createStore(
    combineReducers({
        // customerState: CustomerReducer,
        // accountSate: AccountReducer,
        tellerState: TellerReducer,
        customerState: CustomerReducer,
    }),
    composeWithDevTools()
)

export default store