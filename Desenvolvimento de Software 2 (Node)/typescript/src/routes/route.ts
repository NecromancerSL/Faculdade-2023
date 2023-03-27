import {Router,Request,Response} from 'express';
import * as HomeController from '../controllers/homeController';

const router = Router();

router.get('/',HomeController.home);

router.get('/contato', HomeController.contato);

router.get('/sobre', HomeController.sobre);

router.get('/nome', (req,res) =>{
  let nome:string = req.query.nome as string;
  res.render('nome',{nome});
});

export default router;
