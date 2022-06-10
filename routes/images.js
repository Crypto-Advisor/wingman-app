const router = require('express').Router();

const {
    create_images, 
    get_images,
    get_user_images, 
    update_images, 
    delete_images
} = require('../models/users');

router.put('/create', create_images);

router.get('/', get_images);

router.get('/:id', get_user_images);

router.post('/update/', update_images);

router.delete('/delete/:id', delete_images);

module.exports = router;