
var express = require("express");
var router = express.Router();
var passport = require("passport");
var db = require("../models/index");




router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/signup', function (req, res, next) {
    res.render('signup');
});

//handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/auth/login"
    }), function (req, res) {
    });




router.post('/signup', function (req, res, next) {


    var newUser = new db.User({ username: req.body.username });
    if (req.body.admin_code === '9051') {
        newUser.isAdmin = true;
    }
    db.User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("signup", { error: err.message });
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/");
        });
    });
});



module.exports = router;