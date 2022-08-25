const router = require('express').Router();
const RegUser = require('../Controller/Controller.Reg.User')
router.post('/reg/new', RegUser.RegisterUser);

module.exports = router;