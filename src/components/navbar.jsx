import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import './navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div>
                    <a href=".">JL</a>
                </div>
                <div>
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
