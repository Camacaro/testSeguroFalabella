"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PRODUCTOS = [
    {
        nombre: 'Cobertura',
        sellIn: 10,
        price: 20
    }
];
const ProductController = {
    test: function (req, res) {
        return res.json({
            ok: true,
            mensaje: 'Todo esta bien!'
        });
    },
};
exports.default = ProductController;
