import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';


const SwipeCredits = () =>{
    const [quality, setQuality] = useState(0)
    const [credits, setCredits] = useState(0)

    return(
        <div className='swipe-credits'>
            <div>
                <p>Swipe Quality: {quality}/100</p>
                <div className='stat-bar-outline'>
                        <div className='stat-bar-progress'></div>
                </div>
            </div>
            <div>
                <p>Your Swipe Credits: {credits}/100</p>
                <div className='stat-bar-outline'>
                        <div className='stat-bar-progress'></div>
                </div>
            </div>
            <div className='shareprofile-container'>
                <button className='shareprofile-button'>Share for More Credits</button>
            </div>
        </div>
    )
}

export default SwipeCredits;