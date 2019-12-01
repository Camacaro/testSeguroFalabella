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
    lista: function (req, res) {
        return res.status(200).json({
            ok: true,
            productos: productos_1.PRODUCTOS
        });
    },
};
exports.default = ProductController;
