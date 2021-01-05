import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tab from '@material-ui/core/Tab';
import '../styles/Nav.css'


const NavBar = (props) => {
    let admin = props.tellerInfo.admin
    return admin ? (
        <div className="nav-bar">
            <Tab label="New Teller" className="link"/>
            <Tab label="Sign Out" className="link"/>
        </div>
    ) : (
            <div className="nav-bar">
                <Tab label="Close Day" className="link"/>
                <Tab label="Drawer" className="link"/>
                <Tab label="Sign Out" className="link"/>
            </div>
        )
}

export default NavBar