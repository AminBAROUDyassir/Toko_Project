const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
	Fname: { type: String, required: true, maxLength: 30 },
	Lname: { type: String, required: true, maxLength: 30 },
	email: { type: String, required: true, unique: true, maxLength: 50 },
	birthday: { type: Date, required: true, maxLength: 10 },
	address: { type: String, maxLength: 150 },
	gender: { type: String, maxLength: 10 },
	experienceY: { type: Number, maxLength: 10 },
	isAdmin: { type: Boolean },
	date: { type: Date, default: Date.now },
	password: { type: String, maxLength: 1000 },
	age: { type: Number }
});

userSchema.methods.generateAuthtoken = function() {
	const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
        return token
};

const user = mongoose.model('user', userSchema);

module.exports = { user };
