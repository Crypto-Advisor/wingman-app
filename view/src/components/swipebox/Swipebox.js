import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';
import SwipeCredits from '../swipecredits/SwipeCredits';

import { getPictures, updateStats, updateImage } from './SwipeboxSlice';

import './styles.css';


const Swipebox = () =>{
    const [imgIndex, setImgIndex] = useState(1)
    const dispatch = useDispatch()
    const pictures = useSelector(state => state.swipebox.pictures)
    const loaded = useSelector(state => state.swipebox.loaded)
    const stats = useSelector(state => state.swipecredits.stats)

    const handlers = useSwipeable({
        onSwipedLeft: (e) =>{
            console.log('swiped left')
            document.getElementById('swipebox-img-container').className = 'left-swipe'

            let {id, likes, total_votes, view_weight} = pictures[imgIndex-1]
            dispatch(updateImage({id, likes: likes, total_votes: total_votes+1, view_weight: view_weight-1}))

            const new_viewing = stats.viewing_credits + 1
            const new_weight = stats.like_weight 
            const new_total = stats.total_votes + 1
            dispatch(updateStats({new_weight, new_total, new_viewing}))

            getNextImage()
        },
        onSwipedRight: (e) =>{
            console.log('swiped right')
            document.getElementById('swipebox-img-container').className = 'right-swipe'

            let {id, likes, total_votes, view_weight} = pictures[imgIndex-1]
            dispatch(updateImage({id, likes: likes+1, total_votes: total_votes+1, view_weight: view_weight-1}))

            const new_viewing = stats.viewing_credits + 1
            const new_weight = stats.like_weight + 1
            const new_total = stats.total_votes + 1
            dispatch(updateStats({new_weight, new_total, new_viewing}))

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