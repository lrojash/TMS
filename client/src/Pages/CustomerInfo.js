// import React, { useEffect, useState } from 'react'
// import CustomerCard from '../components/CustomerCard'
// import AccountView from '../components/AccountView'
// import CustomerNavBar from '../components/CustomerNavBar'


// import '../styles/CustomerInfo.css'

// const CustomerInfo = (props) => {
//     console.log('inside customerinfo: ', props)
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [dob, setDob] = useState('')


//     console.log('inside customer info', props)
//     return (
//         <div className="customer-information">
//             <div className="customer-nav-bar">
//                 <CustomerNavBar {...props} />
//             </div>
//             <div className="account-card">
//                 <AccountView {...props} />
//             </div>
//             <div className="customer-card">
//                 <CustomerCard {...props} />
//             </div>
//         </div>
//     )
// }

// export default CustomerInfo


import React from 'react'
import { connect } from 'react-redux'
import CustomerCard from '../components/CustomerCard'
import AccountView from '../components/AccountView'
import CustomerNavBar from '../components/CustomerNavBar'

const CustomerInfo = (props) => {

    console.log('inside customer info', props)
    return (
        <div className="customer-information">
            <div className="customer-nav-bar">
                <CustomerNavBar {...props} />
            </div>
            <div className="account-card">
                <AccountView {...props} />
            </div>
            <div className="customer-card">
                <CustomerCard {...props} />
            </div>
        </div>
    )
}

export default connect()(CustomerInfo)