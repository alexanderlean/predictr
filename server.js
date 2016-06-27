var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/predictAPI');

var User = require('./models/userModel');

var routesApi = require('./server/index');

var app = express();

var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

userRouter = require('./api-routes/userRoutes.js')(User);

app.use('/api/users', userRouter);

app.use('/api', routesApi);

app.listen(port, function(req, res) {
  console.log('Running on port ' + port);
});

app.use(express.static(__dirname + "/src"));
