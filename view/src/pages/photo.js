import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Landing from "../components/landing/Landing";
import SelectPhotos from '../components/selectphotos/SelectPhotos';

export default function Photo(){
    const[open, setOpen] = useState(true)

    return(
        <div className="home-container">
            {open ? 
            <SelectPhotos setOpen={setOpen} />
            : null}
            <Landing />
        </div>
    );
}