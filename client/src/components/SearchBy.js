// import React, { useState } from 'react'
// import TextInput from './TextInput'
// import '../styles/SearchBy.css'

// import { __GetCustomer } from '../services/CustomerServices'

// const SearchBy = (props) => {
//     const [customerId, setCustomerId] = useState('')
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [dob, setDob] = useState('')


//     const handleChange = (e, setFunction) => {
//         e.preventDefault()
//         setFunction(e.target.value)
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             const response = await __GetCustomer({ customerId })
//             console.log('after api request', response)
//             props.history.push('/customerInfo')
//         } catch (error) {
//             throw error
//         }
//     }
//     const handleSubmit2 = async (e) => {
//         e.preventDefault()
//         try {
//             const response = await __GetCustomer({ firstName, lastName, dob })
//             console.log('after api request', response)
//             props.history.push('/customerInfo')
//         } catch (error) {
//             throw error
//         }
//     }
//     return (
//         <div className="SearchBy-page">
//             <h5 className="search-title">Search By:</h5>
//             <form className="search-form" onSubmit={handleSubmit}>
//                 <TextInput
//                     className="form-1"
//                     placeholder="ACCOUNT NUMBER"
//                     name="account"
//                     type="accouont"
//                     value={customerId}
//                     onChange={(e) => handleChange(e, setCustomerId)}
//                 />
//                 <button className="search-button">
//                     Search
//                 </button>
//             </form>
//             <form className="search-form-two" onSubmit={handleSubmit2}>
//                 <TextInput
//                     placeholder="FIRST NAME"
//                     name="firstName"
//                     type="firstName"
//                     value={firstName}
//                     onChange={(e) => handleChange(e, setFirstName)}
//                 />
//                 <TextInput
//                     placeholder="LAST NAME"
//                     name="lastName"
//                     type="lastName"
//                     value={lastName}
//                     onChange={(e) => handleChange(e, setLastName)}
//                 />
//                 <TextInput
//                     placeholder="DATE OF BIRTH"
//                     name="dob"
//                     type="dob"
//                     value={dob}
//                     onChange={(e) => handleChange(e, setDob)}
//                 />
//                 <button className="search-button">
//                     Search
//                 </button>
//             </form>
//         </div>
//     )
// }
// export default SearchBy















import React from 'react'
import { connect } from 'react-redux'
import TextInput from './TextInput'
import { __GetCustomer } from '../services/CustomerServices'

import { AddCustomer, AddAccount, SearchTerm } from '../store/actions/CustomerActions'

const SearchBy = (props) => {
    const handleChange = (e) => {
        props.search(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let customerInfo = {customerId: props.customerState.searchTerm}
        try {
            const response = await __GetCustomer({ customerInfo })
            props.addCustomer(response)
            props.setCustomerInfo(response)
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
        customerState: state.customerState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        search: (term) => dispatch(SearchTerm(term)),
        addCustomer: (customer) => dispatch(AddCustomer(customer))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SearchBy)