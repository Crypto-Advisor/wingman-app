import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import swan from '../../images/swan.svg'
import './styles.css';

const Stats = () =>{
    const [votes, setVotes] = useState(0)
    const [percentile, setPercentile] = useState(0.0)

    return(
        <div className='stats-container'>
            <div>
                <p className='banner-text-popup'>Your Stats</p>
            </div>
            <div className='stats-item-container'>
                <div className='stat'>
                    <p>Keep this photo: {percentile}</p>
                    <div className='stat-bar-outline'>
                        <div className='stat-bar-progress'></div>
                    </div>
                </div>
                <div className='stat'>
                    <p>Right swipes: {percentile}</p>
                    <div className='stat-bar-outline'>
                        <div className='stat-bar-progress'></div>
                    </div>
                </div>
                <div className='stat'>
                    <p>Keep this photo: {percentile}</p>
                    <div className='stat-bar-outline'>
                        <div className='stat-bar-progress'></div>
                    </div>
                </div>
            </div>
            <div className='stats-description'>
                <p className='stats-text'>Here are the stats for your profile after <b>{votes}</b> votes.
If you’d like to receive more votes and feedback, share this or continue voting.</p>
            </div>
            <div className='shareprofile-container'>
                <button className='shareprofile-button'>Share Profile</button>
            </div>
        </div>
    )
}

export default Stats;