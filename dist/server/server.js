"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
// paquete para obtener la data de una peticion post
var bodyParser = require('body-parser');
// =========================
// el default es: es lo que se va a exportar por defecto
// =========================
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
        this.app.use(bodyParser.json());
    }
    static init(puerto) {
        return new Server(puerto);
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    start(callback) {
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
}
exports.default = Server;
