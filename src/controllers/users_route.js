
const express = require('express');
const router = express.Router();
const user_validate = require('./user_validate')
// create a seperate routes and import into app.js
const createUser = require('../models/schema')

const create_user = require('./user_validate');

/*router.post('/post', (req,res) => {
    res.end('hello fom derrick')
})*/


 const login =router.post('/post').post(user_validate.loginUser);
const create = router.route('/post').post(user_validate.createUser);
// create endpoints  for routes


//router.route('/register).post(createuser)


module.exports = {
    login , create
}
