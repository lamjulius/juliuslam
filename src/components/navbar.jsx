import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import './navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div>
                    JL
                </div>
                <div>
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
