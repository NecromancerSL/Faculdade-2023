//imports
import {Router, Request, Response} from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

//init rota
const router = Router();

//config rota
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

//definição da rota usando SearchController
router.get('/search', SearchController.search);

//exports
export default router;