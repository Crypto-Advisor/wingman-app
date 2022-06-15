import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {firebase, authentication} from '../../utils/firebase'
import {  } from './SelectPhotosSlice';

import swan from '../../images/swan.svg'
import selectphoto from '../../images/select-photo.svg'
import './styles.css'
import DragDrop from './DropDrop';


const SelectPhotos = ({setOpen}) =>{

    return(
        <div className='select-photo-popup'>
            <a className="close" onClick={() => setOpen(false)}></a>
            <div className='logo-container' id='popup-logo-container'>
                <img className='logo' id='popup-logo' src={swan} ></img>
                <p className='logo-text' id='popup-logo' >wingman</p>
            </div>
            <div className='popup-description'>
                <p className='banner-text-popup'>Select photo</p>
                <p className='description-text-popup'>Pick which photos you’d like to start receiving feedback on.</p>
            </div>
            <DragDrop />
        </div>
    )
}

export default SelectPhotos;