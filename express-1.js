// to install express use npm i express
const express = require('express');
const morgan = require('morgan');

//* express is a function 
const app = express();

const PORT = 5500;

//* MIDDLEWARE : 
app.use(morgan());

app.get('/', (req, res) => {
    // res.sendFile(`${__dirname}/docs/index.html`);
    res.sendFile('./docs/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./docs/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.status(200)
    res.sendFile('./docs/contact.html', { root: __dirname });
});
app.get('/services', (req, res) => {
    res.sendFile('./docs/services.html', { root: __dirname });
});

app.use((req, res) => {
    res.status(404).send('<h1> Page Not Found!!!</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is Running on Port : ${PORT}`)
})