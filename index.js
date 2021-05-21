const http = require('http');

http.createServer((req, res) => {
    res.write('Hola mundo');
    res.end();
})
.listen('7777');

console.log('Escuchando en ', 7777);