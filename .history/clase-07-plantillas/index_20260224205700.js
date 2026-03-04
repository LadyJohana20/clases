//******************************
//configuramos el servidor en este archivo index.js
//******************************


// 1. modulos importados - lo instalamos con nmp i
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");//libreria para privacidad de passwords
const hbs = require("express-handlebars") 

// Ejecutamos la configuracion de dotenv
dotenv.config();

//Inicializamos las Variables
const app = express();
const PORT = process.env.PORT || 9000 //Traemos el puerto desde el .env o si no existe, le asignamos el 9000

//2. modulos nativos de node - no los instalamos con npm
const os = require("node:os");
const fs = require("node:fs");


//3. middlewares
app.use(express.json());

//4. rutas del GET. Obtiene datos del servidor
app.get("/html", (req, res) =>  {
    //enviar html
    res.send(`
        <h1>Bienvenido a la aplicación con Motores de Plantilla</h1>
        ´);

    });


