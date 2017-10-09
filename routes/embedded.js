var express = require('express');
var router = express.Router();

router.get('/:song_id', function(req, res, next) {
  res.render('player',{song_id:req.params.song_id});
});

module.exports = router;

