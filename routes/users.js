const router = require('express').Router();
const {decodeToken} = require('../utils/index')

const {
    create_user, 
    get_user,
    get_stats, 
    update_user, 
    delete_user
} = require('../models/users');

router.put('/create', create_user);

router.get('/:id', decodeToken, get_user);

router.get('/stats/:id', decodeToken, get_stats);

router.post('/update', decodeToken, update_user);

router.delete('/delete/:id', decodeToken, delete_user);

module.exports = router;