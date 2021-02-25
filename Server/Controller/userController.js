const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const  {user}= require('../Models/user')
const  objectID = require('mongoose').Types.ObjectId
const bcrypt = require('bcrypt');


router.get('/', (req, res) => {
    user.find().select('-password')
    .then ( usersList => res.send(usersList))
    .catch( err => console.error('Error while retrieving Users List : '+ JSON.stringify(err, undefined,2)) )
})

router.post('/', [auth, admin], async (req, res) => {
    let newUser = await user.findOne({ email: req.body.email});
    if (newUser) return res.status(400).send('User already registred')
     newUser = new user ({
                
                Fname: req.body.Fname,
                Lname: req.body.Lname,
                email: req.body.email,
                birthday: req.body.birthday,
                address: req.body.address,
                gender: req.body.gender,
                experienceY: req.body.experienceY,
                password: req.body.password,
    })
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    const token = newUser.generateAuthtoken();
    // console.log(token)
    newUser.save()
    .then ( newuser => res.header('x-auth-token', token).send({id:newuser._id, ...newuser._doc}))
    .catch( err => console.error('Error while creating a newUser : '+ JSON.stringify(err, undefined,2)) )
})

router.put('/:id',[auth, admin], (req, res) => {
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

router.delete('/:id',[auth, admin], (req, res) => {
    if(!objectID.isValid(req.params.id))
    return res.status(400).send('No user with given id : ' + req.params.id)
    user.findByIdAndRemove(req.params.id)
    .then (  deleteduser=> res.send(deleteduser))
    .catch( err => console.error('Error while deleting Users : '+ JSON.stringify(err, undefined,2)) )
})


module.exports = router