//******************************
//configuramos el servidor en este archivo index.js
//******************************


// 1. modulos importados - lo instalamos con nmp i
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");//libreria para privacidad de passwords
const hbs = require("express-handlebars") 

// Ejecutamos la configuracion de dotenv
//dotenv.config();

//Inicializamos las Variables
const app = express();
//const PORT = process.env.PORT || 9000 //Traemos el puerto desde el .env o si no existe, le asignamos el 9000

//2. modulos nativos de node - no los instalamos con npm
const os = require("node:os");
const fs = require("node:fs");


//3. middlewares
app.use(express.json());

//un get de salud del servidor
app.get("/health", (req, res) => {
    res.send("Servidor OK");
});

//4. rutas del GET. Obtiene datos del servidor

//lo llevamos al servidor

// traemos las rutas del get
const rutasGet = require("./routes/rutasget");
const rutasUsers = require("./routes/rutasusers");  
const rutasproductos = require("./routes/rutasproductos");


//usamos las rutas del get
app.use("/api", rutasGet);
app.use("/api", rutasUsers);
app.use("/api", rutasproductos);

app.get("/usuarios", (req, res) => {
    res.send("la ista de usuarios es: Juan, Maria, Pedro ");
});


    //app.listen(PORT, () => {
      //  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
    //});

    //no vamos a levantar el servidor en este archivo, lo haremos en el archivo server.js
    //paso imortante:exportar la app configuracion  con los datos de arriba
    //exportamos un solo elemento 
    module.exports = app;