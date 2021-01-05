import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import { __LoginTeller } from '../services/TellerServices'

const LandingPage = (props) => {

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (e, setFunction) => {
        e.preventDefault()
        setFunction(e.target.value)

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const login = await __LoginTeller({ userId, password })
            if(login) {

                console.log('login successfull', login)
                props.setTellerInfo(login)
                props.setAuth(true)
                props.history.push('/main')
            }
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="sign-in-form">
            <h1 className="main-title">Teller Management System</h1>
            <form className="form-sign-in" onSubmit={handleSubmit}>
                <TextInput
                    placeholder="USER ID"
                    name="userId"
                    type="userId"
                    value={userId}
                    onChange={(e) => handleChange(e, setUserId)}
                />
                <TextInput
                    placeholder="PASSWORD"
                    name="password"
                    type="pasword"
                    value={password}
                    onChange={(e) => handleChange(e, setPassword)}
                />
                <button className="sign-in-button">
                    LOGIN
                </button>
            </form>
        </div>
    )
}

export default LandingPage