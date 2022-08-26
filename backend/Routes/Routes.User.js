const router = require('express').Router();
const Login = require('../Controller/Controller.Auth.User')
const RegUser = require('../Controller/Controller.Reg.User')
router.post('/auth/login', Login.GrantLoginToUser);
router.post('/reg/new', RegUser.RegisterUser);
module.exports = router;