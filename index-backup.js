const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-type': 'text/plain'
    });

    const persona = {
        id: 1,
        name: 'Demo'
    }

    res.write(persona);
    
    res.end();
})
.listen('7777');

console.log('Escuchando en ', 7777);