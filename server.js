//* CORE_MODULES : 

//? How To Create a Server : 
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Request Done', req.url);

    // res.setHeader('Content-type', 'text/plain'); //* sending a plain text 
    // res.write('hello World');
    // res.end()

    // res.setHeader('Content-type', 'text/html'); //* sending html data
    // res.write('<h1>Hello World</h1>');
    // res.end()

    // fs.readFile('index.html', (err, data) => {
    //     if(err) console.log(err);

    //     // res.write(data);
    //     res.end(data);
    // })

    let path = './docs/';

    switch(req.url) {
        case '/' : 
            path += 'index.html';
            break;
        case '/about' :
            path += 'about.html';
            break;
        default : 
            path += '404.html';
            break;
    }

    //? Routing : 
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        res.end(data);
    })


});

server.listen(4000, 'localhost', () => {
    console.log(`Your Server is Running on Port 4000`);
})