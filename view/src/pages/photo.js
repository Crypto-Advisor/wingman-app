import React from 'react'
import { Link } from "react-router-dom";
import Landing from "../components/landing/Landing";
import SelectPhotos from '../components/selectphotos/SelectPhotos';

export default function Photo(){
    return(
        <div className="home-container">
            <SelectPhotos />
            <Landing />
        </div>
    );
}