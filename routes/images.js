const router = require('express').Router();
const {decodeToken} = require('../utils/index')

const {
    create_images, 
    get_images,
    get_user_images, 
    update_images, 
    delete_images
} = require('../models/images');

router.put('/create', decodeToken, create_images);

router.get('/', decodeToken, get_images);

router.get('/:id', decodeToken, get_user_images);

router.post('/update', decodeToken, update_images);

router.delete('/delete/:id', decodeToken, delete_images);

module.exports = router;