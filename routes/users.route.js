const express = require('express');
const { signupUser, signinUser, updateUser } = require('../controllers/users.controller');
const route = express.Router();

route.post('/signup', signupUser);
route.post('/signin', signinUser);
route.put('/', updateUser);

module.exports = route;