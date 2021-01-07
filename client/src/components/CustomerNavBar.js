import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tab from '@material-ui/core/Tab';
import '../styles/Nav.css'


const CustomerNavBar = (props) => {
    
    return (
        <div className="customer-nav-bar">
            <Tab to="/withdraw" component={Link} label="Withdraw" className="link" />
            <Tab to="/deposit" component={Link} label="deposit" className="link" />
            <Tab to="/transfer" component={Link} label="Transfer" className="link" />
            <Tab to="/main" component={Link} label="End Session" className="Link" />
        </div>
    )
}

export default CustomerNavBar