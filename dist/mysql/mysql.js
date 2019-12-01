"use strict";
// =======================
// Patron Singleton
// Para evitar que la clase de vulva a quedar en caso de que tenga multiples intancia
// =======================
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });
        this.conectarDB();
    }
    // ===================
    // Con esto defino un patron Singleton, para tener una sola instancia
    // ===================
    static get instance() {
        // ===================
        // Con esto verificamos si ya existe una instance de la clase,
        // sino la inicializamos
        // esto es para evitar el const mysql = new MySQL();
        // y tener muchas instancias
        // ver el index.ts
        // ===================
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        // ===================
        // aqui utilizo el instance ya que no se si la clase esta inicializada o no y poder utilzar el query
        // ===================
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log('Error Query');
                console.log(err);
                return callback(err);
            }
            // ===================
            // El primer argumento es el error 
            // el segundo es el resultado
            // ===================
            if (results.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    }
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online');
        });
    }
}
exports.default = MySQL;
