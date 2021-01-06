import React from 'react'
import Router from './components/Router'
import './styles/Main.css'

function App(props) {
    return (
        <div>
            <Router {...props}/>
        </div>
    )
}

export default App