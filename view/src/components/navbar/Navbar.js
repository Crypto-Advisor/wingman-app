import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import swan from '../../images/swan.svg'
import navbar_button from '../../images/navbar.svg'
import './styles.css';

const Navbar = () =>{
    return(
        <div className='navbar-container'>
            <div className='logo-container' id='navbar-logo'>
                <img className='logo' src={swan} ></img>
                <p className='logo-text'>wingman</p>
            </div>
            <div id='navbar-button'>
                <img src={navbar_button} ></img>
            </div>
        </div>
    )
}

export default Navbar;