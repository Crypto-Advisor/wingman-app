import React from 'react'
import { Link } from "react-router-dom";
import Landing from "../components/landing/Landing";
import LoginPopup from "../components/loginpopup/LoginPopup"

export default function Login(){
    return(
        <div className="home-container">
            <LoginPopup />
            <Landing />
        </div>
    );
}