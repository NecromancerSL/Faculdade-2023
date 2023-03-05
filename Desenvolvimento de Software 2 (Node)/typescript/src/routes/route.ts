import {Router,Request,Response} from 'express';

const router = Router();

router.get('/',(req,res) =>{
  let user = {
    name: 'Gustavo',
    idade: 21
  };
  res.render('home',{user})
});

router.get('/contato', (req,res) =>{
    res.send('formulário de contato');
});

router.get('/sobre', (req,res) =>{
    res.send('Página institucional sobre a empresa');
});

export default router;
