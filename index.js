const http = require('http'); // Підключення модуля http:
const port = 3010; // Визначення порту:
const server = http.createServer((req, res) => {  // Створення серверу:
    res.end('Hello World');
});

server.listen(port, () => {   // Слухання порту:
    console.log(`Http Server running at port ${port}`);
});


