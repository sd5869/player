var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req,res){
	var fileId = req.query.id; 
	var file = __dirname + '/../music/' + fileId;
	console.log(file);
	fs.exists(file,function(exists){
		if(exists)
		{
			var rstream = fs.createReadStream(file);
			rstream.pipe(res);
		}
		else
		{
			res.send("Its a 404");
			res.end();
		}

	});
});

module.exports = router;
