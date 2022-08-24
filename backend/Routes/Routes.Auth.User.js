const router = require('express').Router();
const Login = require('../Controller/Controller.Auth.User')
router.post('/login', Login.GrantLoginToUser);

module.exports = router;