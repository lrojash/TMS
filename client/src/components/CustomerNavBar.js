import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tab from '@material-ui/core/Tab'
import { border } from '@material-ui/system'


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '../styles/Nav.css'



const CustomerNavBar = (props) => {

    const theme = createMuiTheme({
        overrides: {
            MuiTab: {
                root: {
                    fontSize: '1.25rem',
                    borderLeft: '2px solid black',
                    borderBottom: '2px solid black'
                },
            },
        },
    });

    return (
        <div className="customer-nav-bar">
            <ThemeProvider theme={theme} >

                <Tab to="/withdraw" component={Link} label="Withdraw" className="link" border={1}/>
                <Tab to="/deposit" component={Link} label="deposit" className="link" />
                <Tab to="/transfer" component={Link} label="Transfer" className="link" />
                <Tab to="/main" component={Link} label="End Session" className="Link" />

            </ThemeProvider>
        </div>
    )
}

export default CustomerNavBar

