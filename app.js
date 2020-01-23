var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  cookieParser = require("cookie-parser"),
  LocalStrategy = require("passport-local"),
  session = require("express-session"),
  methodOverride = require("method-override"),
  db = require("./models/index");
// configure dotenv


//requiring routes

const { isLoggedIn } = require('./middleware/index');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');



app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));
//require moment
app.locals.moment = require('moment');
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "Once again Rusty wins cutest dog!",
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use('/auth', authRouter);
app.use('/', isLoggedIn, indexRouter);
app.use('/user_profile', isLoggedIn, usersRouter);


app.listen(3000,function () {
  console.log("The YelpCamp Server Has Started!");
});

