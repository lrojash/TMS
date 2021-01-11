import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tab from '@material-ui/core/Tab';
import '../styles/Nav.css'


const NavBar = (props) => {
    
    let admin = props.tellerState.currentUser[0].admin


    return admin ? (
        <div className="nav-bar">
            <Tab to="/newTeller" component={Link} label="New Teller" className="link" to="newTeller" />

            <Tab to="/" component={Link} label="Sign Out" className="link" />
        </div>
    ) : (
            <div className="nav-bar">
                <Tab label="Close Day" className="link" />
                <Tab to="/drawer" component={Link} label="Drawer" className="link" />
                <Tab to="/" component={Link} label="Sign Out" className="link" />
            </div>
        )
}

export default NavBar










