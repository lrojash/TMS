import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import MainPage from '../Pages/MainPage'

const Router = () => {
    const [authenticated, setAuth] = useState(false)
    const [tellerInfo, setTellerInfo] = useState('')
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
                    component={(props) => <MainPage {...props} authenticated={authenticated} tellerInfo={tellerInfo} setAuth={setAuth} />}
                />
            </Switch>
        </main>
    )
}

export default Router