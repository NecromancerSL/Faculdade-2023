import express from 'express';
import router from './routes/route';
import painel from './routes/painel';
import path from 'path';
import mustache from 'mustache-express';

const server = express();

//mustache traz o html
server.set('view engine','mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache',mustache());

server.use(router);
server.use(painel);


server.use((req,res) =>{
    res.status(404).send('Página não encontrada')
})

server.listen(3000);
console.log('Servidor rodando em http://localhost:3000')