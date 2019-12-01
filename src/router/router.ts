
import { Router, Request, Response} from 'express';

const router = Router();

router.get('/heroes', (req:Request, res:Response)=>{

	res.json({
		ok:true,
		mensaje: 'Todo esta bien!'
	});

});

export default router;