import React from 'react'
import { Link } from "react-router-dom";
import Profile from '../components/profile/Profile';

export default function ProfilePage(){
    return(
        <div className="profile-container">
            <Profile />
        </div>
    );
}