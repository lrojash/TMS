import React, { useState } from 'react'
import { connect } from 'react-redux'
import TextInput from '../components/TextInput'
import NavBar from '../components/NavBar'
import RadioButtons from '../components/RadioButtons'
import BalanceSheet from '../components/BalanceSheet'
import PopUp from '../components/PopUp'
import { __CreateTeller } from '../services/TellerServices'

import {
    setNewUserId,
    setNewUserPassword
} from '../store/actions/TellerActions'
import '../styles/NewTeller.css'

const NewTeller = (props) => {
    console.log('inside new teller', props)
    const [admin, setAdmin] = useState('')
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.name === 'userId') {
            setUserId(e.target.value)
        }
        else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
        else {
            setAdmin(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await __CreateTeller({ userId, password, admin })
            if (response.message) {
                alert('User Id already exists. \nPlease Try again')
            }
            alert('User Created Successfully')
        } catch (error) {
            throw error
        }
        props.history.push('/main')
    }


    return (
        <div className="newTeller-page">
            {/* <NavBar {...props}/> */}
            <form className="form-sign-in" onSubmit={handleSubmit}>
                <TextInput
                    placeholder="USER ID"
                    name="userId"
                    type="userId"

                    onChange={handleChange}
                />
                <TextInput
                    placeholder="PASSWORD"
                    name="password"
                    type="pasword"
                    onChange={handleChange}
                />
                <RadioButtons {...props} onChange={handleChange} />
                <PopUp />
                <button className="create-button">
                    CREATE
                </button>
            </form>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        tellerSate: state.tellerState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        createUser: (userId) => dispatch(setNewUserId(userId)),
        createPassword: (password) => dispatch(setNewUserPassword(password))

    }
}

export default connect(mapStateToProps, mapActionsToProps)(NewTeller)