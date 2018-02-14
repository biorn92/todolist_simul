var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var creator = require('./routes/creator');
var assignee = require('./routes/assignee');


app.use('/creator',creator);
app.use('/assignee',assignee);





var port = process.env.PORT || 8000;
app.listen(port);
module.exports = app;
