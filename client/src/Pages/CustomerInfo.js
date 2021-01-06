import React, { useState } from 'react'

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
        </div>
    )
}

export default CustomerInfo