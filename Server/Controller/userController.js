const express = require('express');

let router = express.Router();

let  {user}= require('../models/user')

router.get('/', (req, res) => {
    user.find()
    .then ( usersList => res.send(usersList))
    .catch( err => console.error('Error while retrieving Users List : '+ JSON.stringify(err, undefined,2)) )
})

module.exports = router