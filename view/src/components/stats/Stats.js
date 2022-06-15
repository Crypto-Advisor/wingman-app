import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import swan from '../../images/swan.svg'
import { fetchStats } from './StatsSlice';
import './styles.css';

const Stats = () =>{
    const dispatch = useDispatch();
    const {total_likes, total_votes} = useSelector(state => state.stats.stats)
    const [votes, setVotes] = useState(0)
    const [percentile, setPercentile] = useState(0.0)

    let progressValue = `${Math.round(total_likes/total_votes *332)}px`
    let progressStyle = {
        width: progressValue,
        height: "17px",
    
        background: "linear-gradient(90.02deg, #FFDE6A 0.23%, #FF7870 106.76%)",
        borderRadius: "30px"
    }

    useEffect(() =>{
        dispatch(fetchStats())
    }, [])

    return(
        <div className='stats-container'>
            <div className='banner-text-popup-container'>
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
                    <p>Right swipes: {Math.round(total_likes/total_votes *100)}/100</p>
                    <div className='stat-bar-outline'>
                        <div style={progressStyle}></div>
                    </div>
                </div>
                <div className='stat'>
                    <p>Profile percentile: {percentile}</p>
                    <div className='stat-bar-outline'>
                        <div className='stat-bar-progress'></div>
                    </div>
                </div>
            </div>
            <div className='stats-description'>
                <p className='stats-text'>Here are the stats for your profile after <b>{total_votes}</b> votes.
If you’d like to receive more votes and feedback, share this or continue voting.</p>
            </div>
            <div className='shareprofile-container'>
                <button className='shareprofile-button'>Share Profile</button>
            </div>
        </div>
    )
}

export default Stats;