const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');


require('../models/User');
const User = mongoose.model('users');


router.get('/login', (req, res) => {
  res.render('users/login');
});

router.get('/register', (req, res) => {
  res.render('users/register');
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/ideas',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});


router.post('/register', (req, res) => {
  let errors = [];

  if (req.body.password !== req.body.password2) {
    errors.push({text: 'Passwords do not match.'});
  }

  if (req.body.password.length < 4) {
    errors.push({text: 'Password must be at least four characters long.'});
  }

  if (errors.length > 0) {
    res.render('users/register', {
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    });
  } else {
    // if there are no errors in the form, proceed to registering the users

    // first check if the email already exists
    User.findOne({email: req.body.email})
      .then(user => {
        if (user) {
          // if it does, show error and redirect to login
          req.flash('error_msg', 'Registration failed. This email has already been registered.');
          res.redirect('/users/login');
        } else {
          // if not, save the user after encrypting the password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                const newUser = new User({
                  name: req.body.name,
                  email: req.body.email,
                  password: hash
                });
                console.log(newUser);
                newUser.save()
                  .then(user => {
                    req.flash('success_msg', 'Registered succesfully. You may now sign in.');
                    res.redirect('/users/login');
                  })
                  .catch(err => {
                    console.log(err);
                    return;
                  });
            });
          });
        }
      });
  }

});


module.exports = router;
