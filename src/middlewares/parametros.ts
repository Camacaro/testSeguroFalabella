
import { Request, Response, NextFunction} from 'express';

export const RegistrarProducto = ( req:Request, res:Response, next:NextFunction ) => {

    const body = req.body;

    const productosValidos = [ 'Cobertura', 'Full cobertura', 'Baja cobertura', 
            'Mega cobertura', 'Full cobertura super duper', 'Super avance' ];

    if( !body.nombre||
        !body.sellIn ||
        !body.price ){

        return res.status(401).json({
            ok:false,
            error: 'Parametros incompletos'
        });
    }

    if ( !productosValidos.find( pro => pro == body.nombre ) ) {
        return res.status(401).json({
            ok:false,
            error: 'Producto no valido',
            productosValidos
        });
    }

    const newProduct = {
		nombre:  body.nombre,
		sellIn : body.sellIn,
        price:  body.price
    };
    
    req.body.newProduct = newProduct;
    next();
}
