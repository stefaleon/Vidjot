const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require ('connect-flash');
const session = require ('express-session');

const app = express();

const port = 5000;

const ideas = require('./routes/ideas');
const users = require('./routes/users');

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


app.use('/ideas', ideas);
app.use('/users', users);


app.get('/', (req, res) => {
  const someString = "This is a string passed to the view."
  res.render('index', {
    someData: someString
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});




app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
