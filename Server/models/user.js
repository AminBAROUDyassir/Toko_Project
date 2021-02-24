const mongoose = require('mongoose')

let user = mongoose.model('user',
{
        Fname: {type:String, required: true, maxLength: 30},
        Lname: {type:String, required: true, maxLength: 30},
        email: {type:String, required: true, unique: true, maxLength: 50},
        birthday: {type:Date, required: true, maxLength: 10},
        address: {type:String, maxLength: 150},
        gender: {type:String, maxLength: 10},
        experienceY: {type:Number, maxLength: 10},
        isAdmin: {type:Boolean},
        date: {type:Date, default: Date.now},
        password: {type:String, maxLength: 1000},

})

module.exports = {user}