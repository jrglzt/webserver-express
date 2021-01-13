const express = require('express')
const app = express()

const hbs = require('hbs');


require('./hbs/helpers');


//heroku congi port
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Jorge'
    });
});
app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port} `);
});