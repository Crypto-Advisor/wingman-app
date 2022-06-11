import axios from 'axios'
import {S_PORT} from './misc'
import Cookies from 'js-cookie'

axios.defaults.headers.common = {
    "Content-Type": "application/json",
    //"X-CSRF-Token": Cookies.get("XSRF-TOKEN")
}

const baseUrl = '/users'

export const createUser = async(user_id) =>{
    const req = axios.put(`${S_PORT}${baseUrl}/create`, {user_id})
    return req.then(response => response.data);
}

export const getUser = async(user_id, token) =>{
    const req = axios.get(`${S_PORT}${baseUrl}/${user_id}`, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data);
}

export const updateUser = async(user_id, like_weight, viewing_credits, token) =>{
    const req = axios.post(`${S_PORT}${baseUrl}/update/${user_id}`, {user_id, like_weight, viewing_credits}, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data)
}

export const deleteUser = async(user_id, token) =>{
    const req = axios.delete(`${S_PORT}${baseUrl}/delete/${user_id}`, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data)
}

