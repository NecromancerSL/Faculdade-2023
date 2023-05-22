//imports
import {Router, Request, Response} from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

//definição da contante router
const router = Router();

//definição das rotas usando PageController
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

//definição da rota usando o  SearchController
router.get('/search', SearchController.search);

//exporta a constante router
export default router;