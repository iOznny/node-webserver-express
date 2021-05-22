const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middelwares - Funcion que se ejecuta antes de otra.
app.use(express.static('public'));

// Routes
app.get('/hola', function (req, res) {
    res.send('Prueba en ruta');
});

app.get('/', function (req, res) {
    res.render('home', {
        name: 'Demo Node',
        title: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        name: 'Demo Node',
        title: 'Curso de Node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        name: 'Demo Node',
        title: 'Curso de Node'
    });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${ process.env.PORT }`)
});