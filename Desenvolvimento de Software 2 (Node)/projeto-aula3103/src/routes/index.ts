//imports
import {Router, Request, Response} from 'express';

//init rota
const router = Router();

//config rota
router.get('/',(req: Request, res: Response) => {
    res.send('home');
});

//exports
export default router;