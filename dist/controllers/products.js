"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController = {
    test: function (req, res) {
        return res.json({
            ok: true,
            mensaje: 'Todo esta bien!'
        });
    }
};
exports.default = ProductController;
