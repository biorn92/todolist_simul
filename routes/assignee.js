var express = require('express');
var router = express.Router();
var lib = require('todo_simulation_test');




var auth = function(req, res, next) {
    if (req.query.token === 'Pippo' || req.query.token === 'Caio' || req.query.token === 'Sempronio'){
      return next();
    }
    return res.status(401).json({message: 'Invalid token'});
};

router.get('/todolist', function(req, res){
  res.json(lib.alltoDoList());
});


router.get('/users', function(req, res){
  res.json(lib.allUsers());
});




router.put('/todolist/:id', auth, function(req, res){
  res.json(lib.completetoDo(parseInt(req.params.id), req.body.toDo));

});


















module.exports = router;
