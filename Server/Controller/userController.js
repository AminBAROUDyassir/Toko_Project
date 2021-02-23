const express = require('express');
let router = express.Router();
let  {user}= require('../models/user')
let objectID = require('mongoose').Types.ObjectId

router.get('/', (req, res) => {
    user.find()
    .then ( usersList => res.send(usersList))
    .catch( err => console.error('Error while retrieving Users List : '+ JSON.stringify(err, undefined,2)) )
})

router.post('/', (req, res) => {
    let newUser = new user ({
                Fname: req.body.Fname,
                Lname: req.body.Lname,
                email: req.body.email,
                birthday: req.body.birthday,
                address: req.body.address,
                gender: req.body.gender,
                experienceY: req.body.experienceY,
    })
    newUser.save()
    .then ( newuser => res.send(newuser))
    .catch( err => console.error('Error while creating a newUser : '+ JSON.stringify(err, undefined,2)) )
})

router.put('/:id', (req, res) => {
    if(!objectID.isValid(req.params.id))
    return res.status(400).send('No user with given id : ' + req.params.id)
    let updatedUser = {
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        email: req.body.email,
        birthday: req.body.birthday,
        address: req.body.address,
        gender: req.body.gender,
        experienceY: req.body.experienceY,
}
    user.findByIdAndUpdate(req.params.id, {$set:updatedUser}, {new:true})
    .then (  updateduser => res.send(updateduser))
    .catch( err => console.error('Error while updating User : '+ JSON.stringify(err, undefined,2)) )
})

router.delete('/:id', (req, res) => {
    if(!objectID.isValid(req.params.id))
    return res.status(400).send('No user with given id : ' + req.params.id)
    user.findByIdAndRemove(req.params.id)
    .then (  deleteduser=> res.send(deleteduser))
    .catch( err => console.error('Error while deleting Users : '+ JSON.stringify(err, undefined,2)) )
})


module.exports = router