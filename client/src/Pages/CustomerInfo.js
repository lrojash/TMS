import React, { useState } from 'react'
import CustomerCard from '../components/CustomerCard'
import AccountView from '../components/AccountView'
import '../styles/CustomerInfo.css'

const CustomerInfo = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')

    console.log('inside customer info', props)
    return (
        <div className="customer-information">
            <h1>
                works
            </h1>
            <div className="account-card">
                <AccountView {...props} />
            </div>
            <div className="customer-card">
                <CustomerCard {...props} />
            </div>
        </div>
    )
}

export default CustomerInfo