const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');

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


app.get('/', (req, res) => {
  const someString = "This is a string passed to the view."
  res.render('index', {
    someData: someString
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
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
      .then(idea => { res.send(idea); });
  }

});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
