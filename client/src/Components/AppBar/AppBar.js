import React from 'react';
import './AppBar.css'
import logo from '../../Resources/logo/logo_circle.jpg'

export default function AppBar(props) {
    return (
        <div className="appbar">
            <a href="/">
                <img className="appbar-logo" src={logo} alt="Logo" />
            </a>
            <a href="/">
                <h2>TravelHood</h2>
            </a>
        </div>
    )
}