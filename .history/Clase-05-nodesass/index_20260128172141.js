/*1. importamos la librería express*/
const express = require('express');
const { log } = require('node:console');

/*2. importamos path para que node encuentre  rutas*/
const path = require('node:path');
const { json } = require('node:stream/consumers');

/*3. inicializamos la app express*/
const app = express();

/*4. Definimos el puerto*/
const PORT = 3000;

/*5. Definimos la carpeta pública*/
app.use( express.static( path.join( __dirname, 'public' ) ) );

//creamos una ruta para recibir datos del formulario
app.post("/reciboproductos", (peticion, respuesta) => {
    //convertimos los datos a json para poder manipularlos
    let datosCompletos = json.parse( JSON.stringify(peticion.body) );
    //imprimimos en cosola cuando recibimos algo
    console.log("Datos recibidos del formulario de productos");
    console.log(datosCompletos.nombre, datosCompletos.precio, datosCompletos.stock);
    

});

/*6. ejecutamos la app en el puerto definido*/
app.listen( PORT, () => {   
    console.log( `Servidor corriendo en http://localhost:${ PORT }` );
} );
