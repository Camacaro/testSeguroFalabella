"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productos_1 = require("../datos/productos");
const ProductController = {
    test: function (req, res) {
        return res.json({
            ok: true,
            mensaje: 'Todo esta bien!',
            PRODUCTOS: productos_1.PRODUCTOS
        });
    },
    listar: function (req, res) {
        return res.status(200).json({
            ok: true,
            productos: productos_1.PRODUCTOS
        });
    },
    agregar: function (req, res) {
        productos_1.PRODUCTOS.unshift(req.body.newProduct);
        return res.status(201).json({
            ok: true,
            message: "Producto agregado",
            producto: req.body.newProduct
        });
    },
    evaluateproducts: function (req, res) {
        const days = req.params.days;
        productos_1.PRODUCTOS.map(producto => {
            // Full cobertura
            producto.sellIn = producto.sellIn - days;
            if (producto.sellIn < 0) {
                producto.price = producto.price - (days * 2);
            }
            else {
                producto.price = producto.price - days;
            }
            if (producto.price < 0) {
                producto.price = 0;
            }
        });
        return res.json({
            ok: true,
            mensaje: 'Todo esta bien!',
            days
        });
    },
};
exports.default = ProductController;
