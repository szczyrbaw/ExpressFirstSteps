/*const express = require('express');
let app = express();

app.listen(3000);

app.get('/', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('Hello GET!');
});

app.get('/:id', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send(`Identyfikator, który został dopisany to ${req.params.id}`);
});


app.post('/', (req,res) => {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!');
});
app.delete('/del_user', (req,res) => {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hello DELETE!');
});
app.get('/list_user', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony list_user');
    res.send('Strona z listą użytkowników');
});
app.get('/ab*cd', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});

app.use((req, res, next) => {
    res.status(404).send('Wybacz, nie mogliśmy odnaleść tego,czego żądasz!');
});*/


const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
let app = express();
let stringifyFile = '';
app.use(bodyParser.json());


app.get('/getNote', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony głównej');
    fs.readFile('./test.json', 'utf-8', function(err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
    
});

app.post('/updateNote/:note', (req, res) => {
    stringifyFile = req.params.note;
    fs.writeFile('./test.json', stringifyFile, (err) => {
        if(err) throw (err);
        console.log('file updated');
    })
})
    
    
app.listen(3000);

    

