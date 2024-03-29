"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = __importDefault(require("../controllers/products"));
const parametros_1 = require("../middlewares/parametros");
const router = express_1.Router();
router.get('/test', products_1.default.test);
router.get('/products', products_1.default.listar);
router.post('/products', parametros_1.RegistrarProducto, products_1.default.agregar);
router.get('/evaluateproducts/:days', products_1.default.evaluateproducts);
exports.default = router;
