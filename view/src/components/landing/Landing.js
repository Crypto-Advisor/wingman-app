import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

const Landing = () =>{
    return(
        <div className='landing-container'>
            <div className='nav-bar'>
                <img src='../../images/swan' ></img>
            </div>
            <div className='banner'>

            </div>
            <div className='picture'>
                
            </div>
            <div className='stats'>
                
            </div>
            <button>Test Profile</button>
        </div>
    )
}

export default Landing;