const router = require('express').Router();
const Login = require('../Controller/authUser')
const RegUser = require('../Controller/regUser')
router.post('/auth/login', Login.GrantLoginToUser);
router.post('/reg/new', RegUser.RegisterUser);
module.exports = router;