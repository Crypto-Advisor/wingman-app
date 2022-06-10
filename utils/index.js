const admin = require('../config/firebase');

export const decodeToken = async ( req, res, next ) =>{
    const token = req.headers.authorization.split(" ")[1];

    try{
        const decodeValue = admin.auth().verifyIdToken(token)
        if(decodeValue){
            console.log(decodeValue)
            next()
        }
        res.json({authorized: false, message:"invalid token"})
    } catch(e){
        res.json({message:"internal error", err:e})
    }
}