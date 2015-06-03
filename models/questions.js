var mongoose = require('mongoose');


var questionSchema = mongoose.Schema({
	number : Number,
	category : String,
	question : String,
	correct : Number,
	points : Number,
	answers : [String]

});

module.exports = mongoose.model('Question',questionSchema);