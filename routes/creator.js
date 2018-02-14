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


router.post('/todolist', auth, function(req, res){
  res.json(lib.addtoDo(req.body));
});


router.delete('/todolist/:idCreator', auth, function(req, res){
  if (!isNaN(req.params.idCreator)) {
      res.status(200).json(lib.deltoDo(parseInt(req.params.idCreator)));
  }
  res.status(400).json();
});


router.put('/todolist/:id', auth, function(req, res){
  res.json(lib.notCompletetoDo(parseInt(req.params.id), req.body.toDo));

});


router.post('/users', auth, function(req, res){
  res.json(lib.addUsers(req.body));
});


router.get('/status/:boolean', function(req, res){
  res.json(lib.condition(Boolean(req.params.boolean)));
});


router.get('/todousers/:id', auth, function(req, res){
  res.json(lib.todoUser(req.params.id));
});





















module.exports = router;
