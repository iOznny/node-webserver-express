const express = require('express');
const app = express();
const port = 7777;

app.set('view engine', 'hbs');

// Middelwares
// Funcion que se ejecuta antes de otra.
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
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${ port }`)
});