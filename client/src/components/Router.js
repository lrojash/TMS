import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import MainPage from '../Pages/MainPage'
import NewTeller from '../Pages/NewTeller'
import CustomerInfo from '../Pages/CustomerInfo'

const Router = (props) => {
    const [authenticated, setAuth] = useState(false)
    const [tellerInfo, setTellerInfo] = useState('')
    const [customerInfo, setCustomerInfo] = useState('')

    return (
        <main>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={(props) => <LandingPage {...props} authenticated={authenticated} tellerInfo={tellerInfo} setTellerInfo={setTellerInfo} setAuth={setAuth} />}
                />
                <Route
                    exact
                    path="/main"
                    component={(props) => <MainPage {...props} authenticated={authenticated} tellerInfo={tellerInfo} setAuth={setAuth} customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} />}
                />
                <Route
                    exact
                    path="/newTeller"
                    component={(props) => <NewTeller {...props} authenticated={authenticated} tellerInfo={tellerInfo} setAuth={setAuth} />}
                />
                <Route
                    exact
                    path="/customerInfo"
                    component={(props) => <CustomerInfo {...props} authenticated={authenticated} tellerInfo={tellerInfo} setAuth={setAuth} customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} />}
                />
            </Switch>
        </main>
    )
}

export default Router