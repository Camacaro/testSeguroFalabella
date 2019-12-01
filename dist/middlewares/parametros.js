"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarProducto = (req, res, next) => {
    const body = req.body;
    if (!body.nombre ||
        !body.sellIn ||
        !body.price) {
        return res.status(401).json({
            ok: false,
            error: 'Parametros incompletos'
        });
    }
    const newProduct = {
        nombre: body.nombre,
        sellIn: body.sellIn,
        price: body.price
    };
    req.body.newProduct = newProduct;
    next();
};
