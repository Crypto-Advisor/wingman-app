import { authentication } from './firebase'
import { onAuthStateChanged } from "firebase/auth";

export const S_PORT = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:3000"

export const idToken = () =>{
    onAuthStateChanged(authentication, (userCred) =>{
        if(userCred){
            userCred.getIdToken(true).then((token) =>{
                console.log(token)
                window.localStorage.setItem('auth_token', token)
            })
            window.localStorage.setItem("auth", "true")
        } else{
            window.localStorage.setItem("auth", "false")
        }
    })
}