import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';
import { getStats } from './SwipeCreditsSlice';


const SwipeCredits = () =>{
    const dispatch = useDispatch()
    const stats = useSelector(state => state.swipecredits.stats)
    const updateStats = useSelector(state => state.swipebox.updateStats)
    const [quality, setQuality] = useState(0)
    const [credits, setCredits] = useState(0)


    useEffect(() =>{
        if(updateStats === true){
            dispatch(getStats())
        }
    }, [updateStats])

    useEffect(() =>{
        dispatch(getStats())
    }, [])

    return(
        <div className='swipe-credits'>
            <div>
                <p>Swipe Impact: {Math.round(stats.like_weight/stats.total_votes * 100)}/100</p>
                <div className='stat-bar-outline'>
                        <div className='stat-bar-progress'></div>
                </div>
            </div>
            <div>
                <p>Your Swipe Credits: {stats.viewing_credits}/100</p>
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