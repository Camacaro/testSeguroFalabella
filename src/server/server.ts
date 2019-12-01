

import express = require('express');
import path = require('path');
// paquete para obtener la data de una peticion post
var bodyParser = require('body-parser');

// =========================
// el default es: es lo que se va a exportar por defecto
// =========================
export default class Server {

	public app: express.Application;
	public port: number;

	constructor(puerto:number){
		this.port = puerto;
		this.app = express();
        this.app.use(bodyParser.json());
	}

	static init (puerto:number){
		return new Server( puerto );
	}

	private publicFolder(){

		const publicPath = path.resolve(__dirname, '../public');

		this.app.use(express.static(publicPath));
	}

	start( callback:Function) {

		this.app.listen( this.port, callback );
		this.publicFolder();

	}
}