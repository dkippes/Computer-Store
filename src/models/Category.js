const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
	name: {
		type: String
	},
	status: {
		type: Number,
		required: true,
		default: 1
	}
});

module.exports = model('Category', categorySchema);