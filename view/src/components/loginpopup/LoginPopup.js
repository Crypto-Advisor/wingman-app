import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {authentication} from '../../utils/firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


import swan from '../../images/swan.svg'
import './styles.css'


const LoginPopup = () =>{
    const [phoneNumber, setPhoneNumber] = useState("+1")
    const [expandForm, setExpandForm] = useState(false)
    const [OTP, setOTP] = useState("");

    
    const generateRecaptcha = () =>{
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                //onSignInSubmit();
            }
            }, authentication);
    }

    const sendCode = (e) => {
        e.preventDefault();
        // if(phoneNumber.length >= 10){
            setExpandForm(true);
            generateRecaptcha();
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then(confirmationResult =>{
                window.confirmationResult = confirmationResult
            }).catch((error) =>{
                console.log(error)
            })
        // }
    }

    const verifyOTP = (e) => {
        let otp = e.target.value;
        setOTP(otp)
        if(otp.length === 6){
            //verify otp
            let confirmationResult = window.confirmationResult
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user)
                // ...
              }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
              });
        }
    }

    return(
        <div className='popup-box'>
            <div className='logo-container' id='popup-logo-container'>
                <img className='logo' id='popup-logo' src={swan} ></img>
                <p className='logo-text' id='popup-logo' >wingman</p>
            </div>
            <div className='popup-description'>
                <p className='banner-text-popup'>Phone Number</p>
                <p className='description-text-popup'>Enter your phone number and get a code to access your account.</p>
            </div>
            <div>
                <form onSubmit={sendCode}>
                    <label htmlFor="phone">Enter your phone number:</label>
                    <input type='tel' id="phone" name="phone" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}></input>
                    <input type='submit'></input>
                </form>
                {expandForm === true? 
                <form>
                    <label htmlFor="code">Enter verification code:</label>
                    <input type='number' id="code" name="code" value={OTP} onChange={verifyOTP}></input>
                </form>
                :
                null
                }
            </div>
            <div id='recaptcha-container'></div>

        </div>
    )
}

export default LoginPopup;