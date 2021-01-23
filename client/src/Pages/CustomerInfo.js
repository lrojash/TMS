import React from 'react'
import { connect } from 'react-redux'
import CustomerCard from '../components/CustomerCard'
import AccountView from '../components/AccountView'
import CustomerNavBar from '../components/CustomerNavBar'
import '../styles/CustomerInfo.css'

const CustomerInfo = (props) => {

    return (
        <div className="customer-information">
            <div className="customer-nav-bar">
                <CustomerNavBar {...props} />
            </div>
            <div className="customer-container">
                <h1 className="account-title">Account Information:</h1>
                <div className="customer-card">
                    <CustomerCard {...props} />
                </div>
                <div className="separator"></div>
                <div className="account-card">
                    <AccountView {...props} />
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        customerState: state.customerState,
        accountState: state.accountState,
    }
}
export default connect(mapStateToProps)(CustomerInfo)