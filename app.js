const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Express 객체 생성
const app = express();

// create routes
const indexRouter = require('./routes/index');

// Cookie
app.use(cookieParser());

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Logger
app.use(logger('dev'));

// Public resource setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/members", express.static(path.join(__dirname, "public/images/team/members")));

// Routes setup
app.use('/', indexRouter);

// Exports
module.exports = app;