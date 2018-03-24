const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require ('connect-flash');
const session = require ('express-session');

const app = express();

const port = 5000;


mongoose.connect('mongodb://localhost/vidjot-dev')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));


require('./models/Idea');
const Idea = mongoose.model('ideas');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.get('/', (req, res) => {
  const someString = "This is a string passed to the view."
  res.render('index', {
    someData: someString
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/ideas', (req, res) => {
  Idea.find({})
    .sort({date: 'desc'})
    .then( ideas => {
        res.render('ideas/index', {
          ideas: ideas
        });
    });
});

app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
});

app.get('/ideas/edit/:id', (req, res) => {
  Idea.findOne({
    _id: req.params.id
  })
    .then(idea => {
      res.render('ideas/edit', {
        idea: idea
      });
    });

});


app.post('/ideas', (req, res) => {
  let errors = [];

  if (!req.body.title) {
    errors.push({text: 'Please add a title.'});
  }
  if (!req.body.details) {
    errors.push({text: 'Please add some details.'});
  }

  if (errors.length > 0) {
    res.render('ideas/add', {
      errors: errors,
      title: req.body.title,
      details: req.body.details
    });
  } else {
    console.log(req.body);
    var newItem = {
      title: req.body.title,
      details: req.body.details
    };
    new Idea(newItem).save()
      .then(idea => {
        req.flash('success_msg', 'Idea created successfully.');
        res.redirect('/ideas');
      });
  }

});

app.put('/ideas/:id', (req,res) => {
  Idea.findOne({
    _id: req.params.id
  })
    .then(idea => {
      idea.title = req.body.title,
      idea.details = req.body.details

      idea.save()
        .then(() => {
          req.flash('success_msg', 'Idea has been edited successfully.');
          res.redirect('/ideas');
        });
    });
});

app.delete('/ideas/:id', (req, res) => {
  Idea.remove({_id: req.params.id})
    .then(() => {
      req.flash('success_msg', 'Idea deleted successfully.');
      res.redirect('/ideas');
    });
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
