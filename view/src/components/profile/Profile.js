import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Navbar from '../navbar/Navbar'
import Stats from '../stats/Stats';
import './styles.css';
import PicturesList from '../pictureslist/PicturesList'
import SelectPhotos from '../selectphotos/SelectPhotos';

const Profile = () =>{
    const[open, setOpen] = useState(false)

    return(
        <div>
            <Navbar />
            <div className='profile-container'>
                <Stats />
                <div id='add-photos-container' onClick={() => setOpen(true)}>
                    Add Photos
                </div>
                <PicturesList />
                {open ? 
                <SelectPhotos setOpen={setOpen} />
                : null}
            </div>

        </div>
    )
}

export default Profile;