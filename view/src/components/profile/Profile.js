import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Navbar from '../navbar/Navbar'
import Stats from '../stats/Stats';
import './styles.css';
import PicturesList from '../pictureslist/PicturesList'

const Profile = () =>{
    return(
        <div>
            <Navbar />
            <Stats />
            <Link to="/upload" id='add-photos-button'>
                <div id='add-photos-container'>
                    Add Photos
                </div>
            </Link>
            <PicturesList />

        </div>
    )
}

export default Profile;