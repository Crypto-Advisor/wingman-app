const admin = require('../config/firebase');
const { getAuth } = require('firebase-admin/auth');

exports.decodeToken = async ( req, res, next ) =>{
    const token = req.headers.authorization.split(" ")[1];
    //const token = req.headers.authorization
    try{
        const decodeValue = await getAuth(admin).verifyIdToken(token)
        console.log('decode value ' + decodeValue)
        if(decodeValue){
            console.log(decodeValue)
            req.user = decodeValue
            next()
        }
        res.json({authorized: false, message:"invalid token"})
    } catch(e){
        res.json({message:"internal error", err:e})
    }

}