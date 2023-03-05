import { Router,Request,Response } from "express";

const painel =Router();

/*painel.get('/', (req,res) =>{
    res.send('Home do painel');
});*/

painel.get('/contato', (req,res) =>{
    res.send('Formulario de contato do painel');
});

painel.get('/sobre', (req,res) =>{
    res.send('Página institucional sobre a empresa do painel');
});

export default painel;