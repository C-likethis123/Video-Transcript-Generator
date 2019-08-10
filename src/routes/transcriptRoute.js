var express=require('express');

var texteditor=express.Router();
var texteditor_router=function() {

	texteditor.route("/")
		.get(function(req, res) {
				res.render('transcript', {title: 'Lecture Video Transcript Generator'});

			});				

	return texteditor;
};
module.exports=texteditor_router;
