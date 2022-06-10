const router = require('express').Router();

const {
    create_images, 
    get_images, 
    update_images, 
    delete_images
} = require('../models/users');

router.put('/create', create_images);

router.get('/:id', get_images);

router.post('/update/:id', update_images);

router.delete('/delete/:id', delete_images);

module.exports = router;