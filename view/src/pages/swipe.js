import React from 'react'
import { Link } from "react-router-dom";
import Swipebox from '../components/swipebox/Swipebox';

export default function Swipe(){
    return(
        <div className="swipe-container">
            <Swipebox />
        </div>
    );
}