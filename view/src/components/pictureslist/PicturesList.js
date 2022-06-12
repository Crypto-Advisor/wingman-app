import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getPictures } from './PicturesListSlice';

import './styles.css';

const PicturesList = () =>{
    const dispatch = useDispatch();
    const [pictures, setPictures] = useState([])

    useEffect(() =>{
        dispatch(getPictures())
    }, [])

    return(
        <div>
            hi
        </div>
    )
}

export default PicturesList;