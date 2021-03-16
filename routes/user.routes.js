const {Router} = require('express');
const { getUser, postUser} = require('../controllers/user.controller');
const router = Router();

router.get('/', getUser);
router.post('/:id', postUser);



module.exports = router;


