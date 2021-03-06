import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Tab from '@material-ui/core/Tab';
import '../styles/Nav.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ClearUser } from '../store/actions/TellerActions'

const NavBar = (props) => {

    let admin = props.tellerState.currentUser[0].admin
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

    const handleClick = ()=> {
        props.clearUser()
    }

    return admin ? (
        <div className="nav-bar">
            <ThemeProvider theme={theme}>
                <Tab to="/newTeller" component={Link} label="New Teller" className="link" to="newTeller" />

                <Tab to="/" component={Link} label="Sign Out" className="link" />

            </ThemeProvider>
        </div>
    ) : (
            <ThemeProvider theme={theme} >
                <div className="nav-bar">
                    <Tab label="Close Day" className="link" />
                    <Tab to="/drawer" component={Link} label="Drawer" className="link" />
                    <Tab to="/" component={Link} label="Sign Out" className="link" onClick={handleClick}/>
                </div>

            </ThemeProvider>
        )
}

const mapStateToProps = (state) => {
    return {
        tellerState: state.tellerState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        clearUser: () => dispatch(ClearUser())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(NavBar)










