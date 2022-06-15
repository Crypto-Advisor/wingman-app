import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getPictures } from './PicturesListSlice';

import './styles.css';

const PicturesList = () =>{
    const dispatch = useDispatch();
    const loading = useSelector(state => state.pictures.loading)
    const pictures = useSelector(state => state.pictures.pictures)

    useEffect(() =>{
        dispatch(getPictures())
    }, [])

    return(
        <div className='profile-items-container'>
            {pictures.map((picture) =>{
                return(
                    <div key={picture.id} className='profile-item'>
                        <img className='profile-picture-item' src={picture.image_url}></img>
                        <div className='profile-picture-item-bottom'>
                            <p>Score: {Math.round(picture.likes/picture.total_votes *100)}/100</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PicturesList;