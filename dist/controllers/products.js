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
        // Puedes crear los productos programaticamente dentro del código, pero debes permitir crear un producto de esos tipos, ej:
        // Tienes el producto Mega cobertura, al momento de vender uno de ese tipo, nuestra lista de productos vendidos agrega uno nuevo.
        // Vendes el mismo anterior.
        // Vendes el producto Cobertura, que es un producto normal, se agrega a la lista.
        // Vendes un super avance y lo mismo.
        // La lista de productos vendidos, quedaria asi:
        // Mega cobertura
        // Mega cobertura
        // Cobertura
        // Super avance
        if (req.body.nombre === 'Mega cobertura') {
            const Cobertura = {
                nombre: 'Cobertura',
                sellIn: req.body.sellIn,
                price: req.body.price
            };
            const Superavance = {
                nombre: 'Super avance',
                sellIn: req.body.sellIn,
                price: req.body.price
            };
            const megaCobertura = [
                req.body.newProduct,
                req.body.newProduct,
                Cobertura,
                Superavance
            ];
            productos_1.PRODUCTOS.unshift(req.body.newProduct);
            productos_1.PRODUCTOS.unshift(Cobertura);
            productos_1.PRODUCTOS.unshift(Superavance);
            return res.status(201).json({
                ok: true,
                message: "Producto agregado",
                producto: megaCobertura
            });
        }
        return res.status(201).json({
            ok: true,
            message: "Producto agregado",
            producto: req.body.newProduct
        });
    },
    evaluateproducts: function (req, res) {
        const days = Number(req.params.days);
        productos_1.PRODUCTOS.map(producto => {
            // disminuir sellIn para cada producto.
            producto.sellIn = producto.sellIn - days;
            switch (producto.nombre) {
                // el producto "Full cobertura" incrementa su precio a medida que pasa el tiempo.
                case 'Full cobertura':
                    producto.price = producto.price + days;
                    break;
                // el producto "Mega cobertura", nunca vence para vender y nunca disminuye su precio.
                case 'Mega cobertura':
                    // el producto "Mega cobertura" tiene un precio fijo de 180.
                    producto.price = 180;
                    break;
                case 'Full cobertura Super duper':
                    // El precio se incrementa en 2 cuando quedan 10 dias o menos y se incrementa en 3, cuando quedan 5 dias o menos.
                    if (producto.sellIn <= 10) {
                        producto.price = producto.price + (days * 2);
                    }
                    if (producto.sellIn <= 5) {
                        producto.price = producto.price + (days * 3);
                    }
                    // el precio disminuye a 0 cuando se vence el tiempo de venta.
                    if (producto.sellIn == 0) {
                        producto.price = 0;
                    }
                    break;
                // El producto "Super avance" dismuniye su precio el doble de rapido que un producto normal.
                case 'Super avance':
                    if (producto.sellIn < 0) {
                        producto.price = producto.price - (days * 4);
                    }
                    else {
                        producto.price = producto.price - (days * 2);
                    }
                    break;
                default:
                    // disminuir los valores de price
                    if (producto.sellIn < 0) {
                        // la fecha de venta ha pasado, sellIn < 0 , los precios de cada producto, se degradan el doble de rapido.
                        producto.price = producto.price - (days * 2);
                    }
                    else {
                        producto.price = producto.price - days;
                    }
                    break;
            }
            // El precio de un producto, nunca es negativo.
            if (producto.price < 0) {
                producto.price = 0;
            }
            // el precio de un producto nunca supera los 100.
            // el producto "Mega cobertura" tiene un precio fijo de 180.
            if (producto.price > 100 && producto.nombre != 'Mega cobertura') {
                producto.price = 100;
            }
        });
        return res.status(200).json({
            ok: true,
            PRODUCTOS: productos_1.PRODUCTOS
        });
    },
};
exports.default = ProductController;
