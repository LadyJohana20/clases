/*1. importamos la librería express*/
const express = require('express');

/*2. importamos path para que node encuentre  rutas*/
const path = require('node:path');

/*3. inicializamos la app express*/
const app = express();

/*4. Definimos el puerto*/
const PORT = 3000;

/*5. Definimos la carpeta pública*/
app.use( express.static( path.join( __dirname, 'public' ) ) );

/*6. ejecutamos la app en el puerto definido*/
app.listen( PORT, () => {   
    console.log( `Servidor corriendo en http://localhost:${ PORT }` );
} );
