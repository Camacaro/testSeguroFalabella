
import { Router, Request, Response} from 'express';
import ProductController from '../controllers/products';

const router = Router();

router.get('/test', ProductController.test);
router.get('/productos', ProductController.lista);

export default router;