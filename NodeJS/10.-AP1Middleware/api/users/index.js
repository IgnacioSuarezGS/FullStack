const router = require('express').Router();
const controller = require('./users.controller');

router.get('/', controller.seeAllUsers);

router.post('/', controller.newUser);

router.delete('/:username', controller.delUser);

router.patch('/:username', controller.modifyUser);

module.exports = router;
