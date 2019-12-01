
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

    listar: function( req: Request, res: Response) {

        return res.status(200).json({
            ok:true,
            productos: PRODUCTOS
        });
    },

    agregar: function( req: Request, res: Response) {

        PRODUCTOS.unshift( req.body.newProduct );

        return res.status(201).json({
            ok:true,
            message: "Producto agregado",
            producto: req.body.newProduct 
        });
    },


}   

export default ProductController;