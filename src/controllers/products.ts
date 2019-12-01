
import { Request, Response} from 'express';
import { PRODUCTOS } from '../datos/productos'

const ProductController = { 

    test: function( req: Request, res: Response) {

        return res.json({
            ok:true,
            mensaje: 'Todo esta bien!',
            PRODUCTOS
        });
    },

    lista: function( req: Request, res: Response) {

        return res.status(200).json({
            ok:true,
            productos: PRODUCTOS
        });
    },


}   

export default ProductController;