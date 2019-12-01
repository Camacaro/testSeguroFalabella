
import { Request, Response, NextFunction} from 'express';

export const RegistrarProducto = ( req:Request, res:Response, next:NextFunction ) => {

    const body = req.body;

    if( !body.nombre||
        !body.sellIn ||
        !body.price ){

        return res.status(401).json({
            ok:false,
            error: 'Parametros incompletos'
        });
    }

    let newProduct = {
		nombre:  body.nombre,
		sellIn : body.sellIn,
        price:  body.price
    };
    
    req.body.newProduct = newProduct;
    next();
}
