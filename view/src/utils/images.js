import axios from 'axios'
import {S_PORT} from './misc'
import Cookies from 'js-cookie'

axios.defaults.headers.common = {
    "Content-Type": "application/json",
    //"X-CSRF-Token": Cookies.get("XSRF-TOKEN")
}

const baseUrl = '/images'

export const createImages = async(id, user_id, image_url, token) =>{

    const req = axios.put(`${S_PORT}${baseUrl}/create`, {id, user_id, image_url, likes: 0, view_weight: 0}, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data);
}

export const getImages = async(token) =>{
    const req = axios.get(`${S_PORT}${baseUrl}`, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data);
}

export const getUserImages = async(user_id, token) =>{
    const req = axios.get(`${S_PORT}${baseUrl}/${user_id}`, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data);
}

export const updateImages = async(user_id, token) =>{
    const req = axios.post(`${S_PORT}${baseUrl}/update`, {user_id}, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data);
}

export const deleteImages = async(user_id, token) =>{
    const req = axios.delete(`${S_PORT}${baseUrl}/delete/${user_id}`, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data);
}

