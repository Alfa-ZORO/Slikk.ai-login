import React from 'react'
import './navbar.css'
import logo from '../../assets/images/Slikk-Logo.svg'

const Navabar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className='links'>
                <li><a href="">New User ?</a></li>
                <li><button className='btn-Signup'>Sign Up</button></li>
            </ul>
        </div>
    )
}

export default Navabar