const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');



router.get('/login', (req, res) => {
  res.render('users/login');
});

router.get('/register', (req, res) => {
  res.render('users/register');
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
    res.send('ok');
  }

});


module.exports = router;
