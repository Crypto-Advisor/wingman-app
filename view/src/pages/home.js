import React from 'react'
import { Link } from "react-router-dom";
import Landing from "../components/landing/Landing";

export default function Home(){
    return(
        <div className="home-container">
            <Landing />
        </div>
    );
}