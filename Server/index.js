const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./src/routes/routes.js');
const server = express();
const port = 3001;

// Habilita CORS para permitir solicitudes entre dominios
server.use(cors());

// Configuración del motor de vistas EJS
server.set('view engine', 'ejs');

// Analiza las solicitudes con cuerpo JSON
server.use(express.json());

// Analiza las solicitudes con cuerpo URL-encoded
server.use(express.urlencoded({ extended: true }));

// Utiliza las rutas definidas en router.js
server.use(router);

try {
    server.listen(port, () => {
        console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
    });
} catch (error) {
    console.error(`Error al iniciar el servidor: ${error}`);
}
