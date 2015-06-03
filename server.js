var express = require('express');
var mongoose = require('mongoose');
var Question = require('./models/questions');

mongoose.connect('mongodb://localhost/jQuizzlers');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('Database connected.');
});


var app = express();

app.use(express.static(__dirname + '/webapp'));
app.use('/lib',express.static(__dirname + '/bower_components'));

app.get('/questions', function (req, res) {
	Question.find({}, function (err, questions){
		  if (err) return console.error(err);
		  console.log(questions);
		  res.json(questions);
	})
});
app.post('/questions',function (req, res){
		var question1 = new Question({
		"number": 2, 					
		"category": "Lorem Ipsum",			
		"question": "Lorem Ipsum Dolor",	
		"answers": [ 						
			"sit amet"
		],
		"correct": 3,						
		"points": 1 						
	});
	question1.save(function (err, question) {
	  if (err) return console.error(err);
	  console.log('Saved a new Question');
	  res.json(question);
	});
});

app.listen(process.env.PORT || 3000);