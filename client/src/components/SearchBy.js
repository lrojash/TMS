import React from 'react'
import { connect } from 'react-redux'
import TextInput from './TextInput'
import { __GetCustomer, __GetCustomerAccounts } from '../services/CustomerServices'

import {
    AddCustomer,
    AddAccount,
    SearchTerm,
    AddFirstName,
    AddLastName,
    AddDob
} from '../store/actions/CustomerActions'
import { SetAccounts } from '../store/actions/AccountActions'
import '../styles/Search.css'


const SearchBy = (props) => {


    const handleChange = (e) => {
        // props.search(e.target.value)
        console.log(e.target.name)
        switch (e.target.name) {
            case "account":
                props.search(e.target.value)
                return
            case "firstName":
                props.setFirstName(e.target.value)
                return
            case "lastName":
                props.setLastName(e.target.value)
                return
            case "dob":
                props.setDob(e.target.value)
                return
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        let customerId = props.customerState.searchTerm
        try {
            const response1 = await __GetCustomer({ customerId })
            if (response1) {
                const response2 = await __GetCustomerAccounts({ customerId })
                props.addCustomer(response1)
                props.setAccounts(response2)
                props.history.push('/customerInfo')
            }
            else {
                alert("Customer Does Not Exist.\n Try Again.")
            }
        } catch (error) {
            throw error
        }
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault()
        let customerInfo = props.customerState
        console.log('inside submit 2: ', customerInfo)
        try {
            let firstName = props.customerState.firstName
            let lastName = props.customerState.lastName
            let dob = props.customerState.dob

            const response1 = await __GetCustomer({ firstName, lastName, dob })
            if (response1) {
                const response2 = await __GetCustomerAccounts({ customerId: response1.id })
                props.addCustomer(response1)
                props.setAccounts(response2)
                props.history.push('customerInfo')
            }
            else {
                alert("Customer Does Not Exist.\n Try Again.")
            }
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="SearchBy-page">
            <h5 className="search-title">Search By:</h5>
            <form className="search-form" onSubmit={handleSubmit}>
                <TextInput
                    className="form-1"
                    placeholder="ACCOUNT NUMBER"
                    name="account"
                    type="account"
                    onChange={handleChange}
                />
                <button className="search-button">
                    Search
                </button>
            </form>
            <form className="search-form-two" onSubmit={handleSubmit2}>
                <TextInput
                    placeholder="FIRST NAME"
                    name="firstName"
                    type="firstName"

                    onChange={handleChange}
                />
                <TextInput
                    placeholder="LAST NAME"
                    name="lastName"
                    type="lastName"
                    onChange={handleChange}
                />
                <TextInput
                    placeholder="DOB (mm-dd-yyyy)"
                    name="dob"
                    type="dob"
                    onChange={handleChange}
                />
                <button className="search-button">
                    Search
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        customerState: state.customerState,
        accountState: state.AccountSTate
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        search: (term) => dispatch(SearchTerm(term)),
        addCustomer: (customer) => dispatch(AddCustomer(customer)),
        setAccounts: (accounts) => dispatch(SetAccounts(accounts)),
        setFirstName: (name) => dispatch(AddFirstName(name)),
        setLastName: (name) => dispatch(AddLastName(name)),
        setDob: (dob) => dispatch(AddDob(dob)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SearchBy)