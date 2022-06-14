import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import swan from '../../images/swan.svg'
import girl from '../../images/girl.png'
import backgrounddot1 from '../../images/background_dots_1.svg'
import backgrounddot2 from '../../images/background_dots_2.svg'
import './styles.css';

const Landing = () =>{
    return(
        <div className='landing-container'>
            <div className='nav-bar'>
                <Link to='/' className='link'> 
                    <div className='logo-container'>
                        <img className='logo' src={swan} ></img>
                        <p className='logo-text'>wingman</p>
                    </div>
                </Link>
                
                    {window.localStorage.getItem('auth') ? 
                    <Link to='/profile' className='link'>
                        <div className='signin-container'>
                                <button className='signin-button'>Profile</button>
                        </div>
                    </Link>
                    :
                    <Link to='/login' className='link'>
                        <div className='signin-container'>
                                <button className='signin-button'>Sign in</button>
                        </div>
                    </Link>
                    }
                
            </div>
            <div className='banner'>
                <p className='banner-text'>
                    Your profile.
                        Their feedback.
                    Real results.
                </p>
            </div>
            <div className='picture'>
                <div className='colored-rectangle'>
                    <img className='rectangle-girl-img' src={girl}></img>
                </div>
            </div>
            <img className='background-dots1' src={backgrounddot1} ></img>
            <div className='stats'>
                <div className='container-box'>
                    <div className='stat-items'>
                        <div className='stat-item'>
                            <p className='stat-text'><b>Keep this photo:</b> 87%</p>
                            <div className='stat-graphic'>
                                <div className='stat1-internal-graphic'>
                                </div>
                            </div>
                        </div>
                        <div className='stat-item'>
                            <p className='stat-text'><b>Right swipes:</b> 87%</p>
                            <div className='stat-graphic'>
                                <div className='stat2-internal-graphic'>
                                </div>
                            </div>
                        </div>
                        <div className='stat-item'>
                            <p className='stat-text'><b>Profile Percentile:</b> 87%</p>
                            <div className='stat-graphic'>
                                <div className='stat3-internal-graphic'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='stat-text-container'>
                        <p className='stat-text-header'>How does this work?</p>
                        <p className='stat-text-body'>Have real people give you actionable feedback on your dating profile.</p>
                    </div>
                </div>
            </div>
            <img className='background-dots2' src={backgrounddot2} ></img>
            <div className='testprofile-container'>
                <button className='testprofile-button'>Test Profile</button>
            </div>
        </div>
    )
}

export default Landing;