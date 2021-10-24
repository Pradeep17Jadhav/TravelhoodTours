import React from 'react';
import './AppBar.css'
import logo from '../../Resources/logo/logo_circle.jpg'

export default function AppBar(props) {
    return (
        <div className="appbar">
            <img className="appbar-logo" src={logo} alt="Logo"/>
            <h2>
                &nbsp;TravelHood
            </h2> 
        </div>
    )
}