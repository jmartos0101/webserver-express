const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
 
app.use(express.static(__dirname + '/public'));
//Express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//heroku
const port = process.env.PORT || 3000;
//----

 app.get('/', function (req, res) {

    res.render('home.hbs', {
            nombre: 'Jose Antonio',
    });


});

app.get('/about', function (req, res) {

    res.render('about.hbs', {

    });


});
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})