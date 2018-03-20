const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose =  require('mongoose');

const app = express();

const port = 5000;


mongoose.connect('mongodb://localhost/vidjot-dev')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));


require('./models/Idea');
const Idea = mongoose.model('ideas');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


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
