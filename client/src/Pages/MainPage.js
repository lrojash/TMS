import React from 'react'
import NavBar from '../components/NavBar'
import SearchBy from '../components/SearchBy'

const MainPage = (props) => {
    console.log('reached main', props)
    return (
        <div className="main-page">
            <NavBar {...props}/>
            <div className="search">
                <SearchBy {...props}/>
            </div>
        </div>
    )
}
export default MainPage