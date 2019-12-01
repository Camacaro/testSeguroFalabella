
import { Router, Request, Response} from 'express';
import ProductController from '../controllers/products';
import { RegistrarProducto } from '../middlewares/parametros';

const router = Router();

router.get('/test', ProductController.test);
router.get('/productos', ProductController.listar);
router.post('/productos', RegistrarProducto, ProductController.agregar);

export default router;