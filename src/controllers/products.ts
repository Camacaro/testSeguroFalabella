
import { Request, Response} from 'express';

const ProductController = { 

    test: function( req: Request, res: Response) {

        return res.json({
            ok:true,
            mensaje: 'Todo esta bien!'
        });
    }
}   

export default ProductController;