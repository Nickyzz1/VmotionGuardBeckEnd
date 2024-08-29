const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// EJS
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.listen(10000, "0.0.0.0", () => console.log('Acesse: http://localhost:10000/'));
