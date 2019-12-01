
import { Router, Request, Response} from 'express';
import ProductController from '../controllers/products';
import { RegistrarProducto } from '../middlewares/parametros';

const router = Router();

router.get('/test', ProductController.test);
router.get('/products', ProductController.listar);
router.post('/products', RegistrarProducto, ProductController.agregar);
router.get('/evaluateproducts/:days', ProductController.evaluateproducts);

export default router;