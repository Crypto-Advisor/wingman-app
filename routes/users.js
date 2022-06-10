const router = require('express').Router();
const decodeToken = require('../utils/index')

const {
    create_user, 
    get_user, 
    update_user, 
    delete_user
} = require('../models/users');

router.put('/create', create_user);

router.get('/:id', decodeToken, get_user);

router.post('/update/:id', update_user);

router.delete('/delete', delete_user);

module.exports = router;