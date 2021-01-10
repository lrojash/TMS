import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import NewTeller from '../Pages/NewTeller'
import CustomerInfo from '../Pages/CustomerInfo'
import Withdraw from '../Pages/Withdraw'
import SignInPage from '../Pages/SignInPage'
import Deposit from '../Pages/Deposit'

const Router = () => {




    return (
        <main>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={(props) => <SignInPage {...props} />}
                />
                <Route
                    exact
                    path="/main"
                    component={(props) => <MainPage {...props} />}
                />
                <Route
                    exact
                    path="/newTeller"
                    component={(props) => <NewTeller {...props} />}
                />
                <Route
                    exact
                    path="/customerInfo"
                    component={(props) => <CustomerInfo {...props} />}
                />
                <Route
                    exact
                    path="/withdraw"
                    component={(props) => <Withdraw {...props} />}
                />
                <Route
                    exact
                    path="/deposit"
                    component={(props) => <Deposit {...props} />}
                />
            </Switch>
        </main>
    )
}

export default Router