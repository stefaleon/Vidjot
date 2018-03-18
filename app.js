const express = require('express');

const app = express();

const port = 5000;


app.get('/', (req, res) => {
  res.send('main route');
});

app.get('/about', (req, res) => {
  res.send('about route');
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
