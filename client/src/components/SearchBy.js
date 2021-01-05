import React, { useState } from 'react'
import TextInput from './TextInput'
import '../styles/SearchBy.css'

const SearchBy = (props) => {
    const [account, setAccount] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')

    const handleChange = (e, setFunction) => {

    }
    return (
        <div className="SearchBy-page">
            <h5 className="search-title">Search By:</h5>
            <form className="search-form">
                <TextInput
                    className="form-1"
                    placeholder="ACCOUNT NUMBER"
                    name="account"
                    type="accouont"
                    value={account}
                    onChange={(e) => handleChange(e, setAccount)}
                />
                <button className="search-button">
                    Search
                </button>
            </form>
            <form className="search-form-two">
                <TextInput
                    placeholder="FIRST NAME"
                    name="firstName"
                    type="firstName"
                    value={firstName}
                    onChange={(e) => handleChange(e, setFirstName)}
                />
                <TextInput
                    placeholder="LAST NAME"
                    name="lastName"
                    type="lastName"
                    value={lastName}
                    onChange={(e) => handleChange(e, setLastName)}
                />
                <TextInput
                    placeholder="DATE OF BIRTH"
                    name="dob"
                    type="dob"
                    value={dob}
                    onChange={(e) => handleChange(e, setDob)}
                />
                <button className="search-button">
                    Search
                </button>
            </form>
        </div>
    )
}
export default SearchBy