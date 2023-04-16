//imports do projeto
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//acessando a porta do arquivo .env
dotenv.config();

//init server
const server = express();

//template engine
server.set('view engine', 'mustache');
//set engine
server.engine('mustache', mustache());

//set public folder
server.use(express.static(path.join(__dirname, '../public')));
//set views folder
server.set('views', path.join(__dirname, 'views'));

//set 404 not found default page
server.use((req,res) =>{
    res.send('Page not found!');
});

//set as rotas do index.ts
server.use(mainRoutes);

//server listen
server.listen(process.env.PORT);