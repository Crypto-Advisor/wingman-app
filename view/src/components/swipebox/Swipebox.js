import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';
import SwipeCredits from '../swipecredits/SwipeCredits';

import { getPictures } from './SwipeboxSlice';

import './styles.css';


const Swipebox = () =>{
    const [imgIndex, setImgIndex] = useState(1)
    const dispatch = useDispatch()
    const pictures = useSelector(state => state.swipebox.pictures)
    const loaded = useSelector(state => state.swipebox.loaded)

    const handlers = useSwipeable({
        onSwipedLeft: (e) =>{
            console.log('swiped left')
            document.getElementById('swipebox-img-container').className = 'left-swipe'
            getNextImage()
        },
        onSwipedRight: (e) =>{
            console.log('swiped right')
            document.getElementById('swipebox-img-container').className = 'right-swipe'
            getNextImage()
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    })

    const getNextImage = () =>{
        setImgIndex((imgIndex) => imgIndex + 1)
        console.log(imgIndex)
        if(imgIndex < pictures.length){
            document.getElementById('swipebox-img-container').innerHTML = "<img src='" + pictures[imgIndex].image_url + "'></img>"
        } else{
            document.getElementById('swipebox-img-container').innerHTML = "<h1>Out of images for today!</h1>"
        }
    }

    useEffect(() =>{
        dispatch(getPictures())
    }, [])

    useEffect(() =>{
        if(loaded === true){
            console.log(pictures[0].image_url)
            document.getElementById('swipebox-img-container').innerHTML = "<img src='" + pictures[0].image_url + "'></img>"
        }
    }, [loaded])

    return(
        <div className='swipebox-container'>
            <div>
                <p>Swipe left to pass or Swipe right to like</p>
            </div>
            <div {...handlers} id='swipebox-img-container'>
            </div>
            <SwipeCredits />
        </div>
    )
}

export default Swipebox;