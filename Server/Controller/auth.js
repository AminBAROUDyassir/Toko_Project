const express = require('express');
let router = express.Router();
let  {user}= require('../Models/user')
let objectID = require('mongoose').Types.ObjectId
const bcrypt = require('bcrypt');



router.post('/', async (req, res) => {
    let loginUser = await user.findOne({ email: req.body.email});
    console.log(loginUser, req.body)
    if (!loginUser) return res.status(400).send('Invalid email or password');
    const validPassword = await bcrypt.compare(req.body.password, loginUser.password)
    if (!validPassword) return res.status(400).send('Invalid email or password');
    const token = loginUser.generateAuthtoken();
    res.send(token);
});


module.exports = router