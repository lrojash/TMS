import React from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import SearchBy from '../components/SearchBy'

const MainPage = (props) => {
    console.log('inside main: ', props)
    return (
        <div className="main-page">
            <NavBar {...props}/>
            <div className="search">
                <SearchBy {...props}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tellerState: state.tellerState
    }
}

export default connect(mapStateToProps)(MainPage)