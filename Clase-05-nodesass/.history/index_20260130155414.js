/*1. importamos la librería express*/
const express = require('express');
const { log } = require('node:console');



/*2. importamos path para que node encuentre  rutas*/
const path = require('node:path');
const { json } = require('node:stream/consumers');

/*3. inicializamos la app express*/
const app = express();
//usar una funcion unica que convierte todo a json
app.use( express.json() );

/*4. Definimos el puerto*/
const PORT = 3000;

/*5. Definimos la carpeta pública*/
app.use( express.static( path.join( __dirname, 'public' ) ) );

//creamos una ruta para recibir datos del formulario
app.post("/reciboproductos", (peticion, respuesta) => {
    console.log(peticion);  
    console.log("***************************************");
    console.log("***************************************");

    console.log(peticion.method);
    console.log(peticion.url);
    console.log(peticion.headers);
    console.log(peticion.body);
    
    
    
    //imprimimos en cosola cuando recibimos algo
    console.log("Datos recibidos del formulario de productos");

    console.log(peticion.body.nombre, peticion.body.precio, peticion.body.stock);
    

});

/*6. ejecutamos la app en el puerto definido*/
app.listen( PORT, () => {   
    console.log( `Servidor corriendo en http://localhost:${ PORT }` );
} );
