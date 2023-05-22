//importação
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//importacao .env
dotenv.config();

//inicia o servidor
const server = express();

//definição da enginei mustache
server.set('view engine', 'mustache');
//inicializa engine
server.engine('mustache', mustache());

//define a pasta publica
server.use(express.static(path.join(__dirname, '../public')));
//define o  folder view
server.set('views', path.join(__dirname, 'views'));

//define routes
server.use(mainRoutes);

//define 404 
server.use((req, res)=>{
    res.send('Página nao encontrada!');
})

//server listen
server.listen(process.env.PORT);