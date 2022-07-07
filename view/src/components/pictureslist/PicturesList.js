import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getPictures } from './PicturesListSlice';

import './styles.css';

const PicturesList = () =>{
    const dispatch = useDispatch();
    const loading = useSelector(state => state.pictures.loading)
    const pictures = useSelector(state => state.pictures.pictures)
    const[open, setOpen] = useState(false)
    const[selectedPic, setSelectedPic] = useState()

    const TogglePictureInfo = () =>{
        let {id, image_url, likes, total_votes, date_created} = selectedPic
        let pictureInfo = (
            <div className='picture-info-container'>
                <a className="close" onClick={() => setOpen(false)}></a>
                <img src={image_url}></img>
                <div>
                    <h3>Photo Information</h3>
                    <div className='picture-info-line'></div>
                </div>
                <p>Score: {Math.round(likes/total_votes *100)}/100</p>

                <button className='picture-info-share'>Share Results</button>
                <button className='picture-info-delete'>Delete Photo</button>
            </div>
        )
        return pictureInfo
    }

    useEffect(() =>{
        dispatch(getPictures())
    }, [])

    return(
        <div>
            <div className='profile-items-container'>
                {pictures.map((picture) =>{
                    return(
                        <div key={picture.id} className='profile-item' onClick={() => {setSelectedPic(picture); setOpen(true);}}>
                            <img className='profile-picture-item' src={picture.image_url}></img>
                            <div className='profile-picture-item-bottom'>
                                <p>Score: {Math.round(picture.likes/picture.total_votes *100)}/100</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {open ? 
                <TogglePictureInfo />
            : null}
            <div id="picture_info_selector"></div>
        </div>
    )
}

export default PicturesList;