import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {firebase, authentication} from '../../utils/firebase'
import { RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "firebase/auth";
import { loginThunk } from './LoginPopupSlice';

import swan from '../../images/swan.svg'
import './styles.css'


const LoginPopup = () =>{
    const dispatch = useDispatch();
    const [phoneNumber, setPhoneNumber] = useState("+1")
    const [expandForm, setExpandForm] = useState(false)
    const [OTP, setOTP] = useState("");
    const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true");
    const [token, setToken] = useState("");

    
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
                window.localStorage.setItem("uid", result.user.uid)
                dispatch(loginThunk(result.user.uid))
                result.user.getIdToken().then((token) =>{
                    window.localStorage.setItem('auth_token', token)
                })
                window.localStorage.setItem("auth", "true")
                setAuth(true)
                window.location = '/upload'
                // ...
              }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
              });
        }
    }

    useEffect(() =>{
        onAuthStateChanged(authentication, (userCred) =>{
            if(userCred){
                userCred.getIdToken().then((token) =>{
                    setToken(token)
                })
                window.localStorage.setItem("auth", "true")
                setAuth(true)
            } else{
                setAuth(false)
            }
        })
    }, [])



    return(
        <div>
            <div className='popup-box'>
                <div className='logo-container' id='popup-logo-container'>
                    <img className='logo' id='popup-logo' src={swan} ></img>
                    <p className='logo-text' id='popup-logo' >wingman</p>
                </div>
                <div className='popup-description'>
                    <p className='banner-text-popup'>Phone Number</p>
                    <p className='description-text-popup'>Enter your phone number and get a code to access your account.</p>
                </div>
                <div className='login-entry'>
                    {expandForm === true? 
                    <form>
                        <label htmlFor="code">Enter verification code:</label>
                        <input type='number' id="code" name="code" value={OTP} onChange={verifyOTP}></input>
                    </form>
                    :
                    <form onSubmit={sendCode}>
                        <input type='tel' id="phone" name="phone" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}></input>
                        <input type='submit' className='submit-button'></input>
                    </form>
                    }
                </div>
            </div>
            <div id='recaptcha-container'></div>

        </div>
    )
}

export default LoginPopup;