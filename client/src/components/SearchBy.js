import React from 'react'
import { connect } from 'react-redux'
import TextInput from './TextInput'
import { __GetCustomer, __GetCustomerAccounts } from '../services/CustomerServices'

import { AddCustomer, AddAccount, SearchTerm } from '../store/actions/CustomerActions'
import { SetAccounts } from '../store/actions/AccountActions'
const SearchBy = (props) => {
    console.log('inside search: ', props)
    const handleChange = (e) => {
        props.search(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('inside submit', props)
        let customerInfo = { customerId: props.customerState.searchTerm }
        try {
            const response1 = await __GetCustomer({ customerInfo })
            const response2 = await __GetCustomerAccounts({ customerInfo })
            
            props.addCustomer(response1)
            props.setAccounts(response2)
            props.history.push('/customerInfo')
        } catch (error) {
            throw error
        }
    }

    // const handleSubmit2 = async (e) => {
    //     e.preventDefault()
    //     console.log(props)
    // }

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
            {/* <form className="search-form-two" onSubmit={handleSubmit2}>
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
                    placeholder="DATE OF BIRTH"
                    name="dob"
                    type="dob"
                    onChange={handleChange}
                />
                <button className="search-button">
                    Search
                </button>
            </form> */}
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
        setAccounts: (accounts) => dispatch(SetAccounts(accounts))

    }
}

export default connect(mapStateToProps, mapActionsToProps)(SearchBy)