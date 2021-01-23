import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Tab from '@material-ui/core/Tab'



import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '../styles/Nav.css'
import { ClearCustomer } from '../store/actions/CustomerActions'
import { ClearAccounts } from '../store/actions/AccountActions'


const CustomerNavBar = (props) => {
    const handleClick = () => {
        props.clearAccounts()
        props.clearCustomer()
    }
    const theme = createMuiTheme({
        overrides: {
            MuiTab: {
                root: {
                    fontSize: '1.25rem',
                    borderTop: '2px solid black',
                    borderBottom: '2px solid black',
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black',
                    borderRadius: "2%",
                    marginRight: ".001em"
                },
            },
        },
    });

    return (
        <div className="customer-nav-bar">
            <ThemeProvider theme={theme}>

                <Tab to="/withdraw" component={Link} label="Withdraw" className="link" />
                <Tab to="/deposit" component={Link} label="deposit" className="link" />
                <Tab to="/transfer" component={Link} label="Transfer" className="link" />
                <Tab to="/main" component={Link} label="End Session" className="Link" id="action-type" onClick={handleClick} />

            </ThemeProvider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        customerState: state.customerState,
        accountState: state.accountState,
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        clearCustomer: () => dispatch(ClearCustomer()),
        clearAccounts: () => dispatch(ClearAccounts()),
    }
}
export default connect(mapStateToProps, mapActionsToProps)(CustomerNavBar)
