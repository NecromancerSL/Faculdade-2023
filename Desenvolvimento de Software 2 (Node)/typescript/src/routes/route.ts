import {Router,Request,Response} from 'express';

const router = Router();

router.get('/',(req,res) =>{
  let idade:number = 90;
  let exibe:boolean = false;
  if(idade > 50){
    exibe = true;
  }
  res.render('home',{
    nome:"Gustavo",
    exibe,
    produtos:[
      {titulo:'produto x',preco:10},
      {titulo:'produto y',preco:15},
      {titulo:'produto z',preco:7}
    ]
  })
});

router.get('/contato', (req,res) =>{
    res.render('contato');
});

router.get('/sobre', (req,res) =>{
    res.render('sobre');
});

router.get('/nome', (req,res) =>{
  let nome:string = req.query.nome as string;
  res.render('nome',{nome});
});

export default router;
