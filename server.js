const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Request made");
    console.log(req.url);
    console.log(req.method);

    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./docs/index.html', (err, data) => {
        if (err) {
            console.log(err.message);
            res.end("<h1>Error loading file</h1>");
        } else {
            res.write(data);
            res.end(); 
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log("Server is listening");
});