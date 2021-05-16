import { Router } from 'express';
import { cryptocurrencieController } from '../controllers/cryptocurrencie-controller';

const router: Router = Router();

router.get('/list-all', cryptocurrencieController.listAll);

export default router;