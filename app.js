require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`, (err) => {
    console.log(err);
});

// Servir contenido estatico
// Al hacer esto la linea 9 queda sin efecto
// ya que directamente carga el index que
// creamos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'David Acurero',
        titulo: 'NodeJs - HBS'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'David Acurero',
        titulo: 'NodeJs - HBS'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'David Acurero',
        titulo: 'NodeJs - HBS'
    });
});

// aqui vamos a preparar una pagina de
// error not found
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port);