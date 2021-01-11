import React from 'react'
import { connect } from 'react-redux'
import TextInput from '../components/TextInput'
import { __LoginTeller } from '../services/TellerServices'
import {
    setUserId,
    setUserPassword,
    setCurrentUser,
} from '../store/actions/TellerActions'
import '../styles/Main.css'

const SingInpage = (props) => {
    console.log('inside sign in: ', props)
    const handleChange = (e) => {
        if (e.target.name === "userId") {
            props.setTellerId(e.target.value)
        }
        else {
            props.setTellerPassword(e.target.value)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let userId = props.tellerState.userId
        let password = props.tellerState.password
        try {
            const login = await __LoginTeller({ userId, password })
            props.setUser(login)
            // props.setAuth(true)
            props.history.push('/main')
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
                    onChange={handleChange}
                />
                <input
                    placeholder="PASSWORD"
                    name="PASSWORD"
                    type="password"
                    onChange={handleChange}
                />

                <button className="sign-in-button">
                    LOGIN
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tellerState: state.tellerState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        setTellerId: (userId) => dispatch(setUserId(userId)),
        setTellerPassword: (password) => dispatch(setUserPassword(password)),
        setUser: (user) => dispatch(setCurrentUser(user))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SingInpage)