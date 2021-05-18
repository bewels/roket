const { Schema, model } = require('mongoose');

const User = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	surname: String,
	role: [{ type: String, ref: 'Role' }],
});

module.exports = model('User', User);
