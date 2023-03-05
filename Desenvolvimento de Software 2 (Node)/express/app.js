var express = require('express'); //utilizar o express
var  app = express(); //instancia o express

app.use(express.static('public')); //permite acesso as paginas

var path = require('path');

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/page/index.html');
})

app.get('/sobre', (req,res) =>{
    res.sendFile(__dirname + '/public/page/sobre.html');
})

app.get('/contato', (req,res) =>{
    res.sendFile(__dirname + '/public/page/contato.html');
})

app.get('/login', (req,res) =>{
    res.sendFile(__dirname + '/public/page/login.html');
})


app.listen(8081,() =>{
    console.log("escutando")
})//fazer o servidor rodar