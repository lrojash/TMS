import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tab from '@material-ui/core/Tab';
import '../styles/Nav.css'


const NavBar = (props) => {
    let admin = props.tellerInfo.admin

    const [value, setValue] = useState('')

    const onClick = (e) => {
        console.log('inside click: ', e.target)
    }

    return admin ? (
        <div className="nav-bar">
            <Tab to="newTeller" component={Link} label="New Teller" className="link" to="newTeller" />

            <Tab to="/" component={Link} label="Sign Out" className="link" />
        </div>
    ) : (
            <div className="nav-bar">
                <Tab label="Close Day" className="link" />
                <Tab label="Drawer" className="link" />
                <Tab to="/" component={Link} label="Sign Out" className="link" />
            </div>
        )
}

export default NavBar










