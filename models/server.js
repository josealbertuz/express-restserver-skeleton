const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';

        this.middlewares();
        this.routes();
    }

    middlewares(){

        //CORS permite cruzar diferentes servidores para suministrar al cliente
        this.app.use(cors());

        //permite parsear el body que recibimos
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use(this.userPath, require('../routes/user.routes'));
    }

    listen(){
        this.app.listen(this.port);
    }


}

module.exports = Server;