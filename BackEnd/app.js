var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('./dbConfig/mongoose');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login'); // login
var usersRouter = require('./routes/users'); // register / signup
var resturantsRouter = require('./routes/resturants');
var resturantMenu = require('./routes/restaurantsMenu');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/user', usersRouter);
app.use('/resturants', resturantsRouter);
app.use('/restaurantsMenu', resturantMenu)

module.exports = app;
