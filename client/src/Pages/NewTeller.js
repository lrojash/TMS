import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import NavBar from '../components/NavBar'
import RadioButtons from '../components/RadioButtons'
import { __CreateTeller } from '../services/TellerServices'

const NewTeller = (props) => {
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    // const {
    //     admin: [admin, setAdmin]
    // } = {
    //     admin: useState(false),
    //     ...(props.state || {})
    // }
    const [admin, setAdmin] = useState('')

    const handleChange = (e, setFunction) => {
        setFunction(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await __CreateTeller({userId, password, admin})
            if(response.message) {
                alert('User Id already exists. \nPlease Try again')
            }
            alert('User Created Successfully')
        } catch(error) {
            throw error 
        }
        props.history.push('/main')
    }

    return (
        <div className="newTeller-page">
            <NavBar {...props} />
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
                <RadioButtons {...props} onChange={(e) => handleChange(e, setAdmin)} />
                <button className="create-button">
                    CREATE
                </button>
            </form>
        </div>
    )
}
export default NewTeller