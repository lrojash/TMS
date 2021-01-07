import React from 'react'
import { connect } from 'react-redux'
import CustomerCard from '../components/CustomerCard'
import AccountView from '../components/AccountView'
import CustomerNavBar from '../components/CustomerNavBar'
import '../styles/CustomerInfo.css'

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

const mapStateToProps = (state) => {
    return {
        customerState: state.customerState
    }
}
export default connect(mapStateToProps)(CustomerInfo)