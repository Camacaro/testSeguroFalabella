
import { Request, Response} from 'express';
import { IProducto } from '../interfaces';

const PRODUCTOS: IProducto[] = [
    { 
        nombre: 'Cobertura',
        sellIn: 10,
        price: 20
    }
]

const ProductController = { 

    test: function( req: Request, res: Response) {

        return res.json({
            ok:true,
            mensaje: 'Todo esta bien!'
        });
    },


}   

export default ProductController;