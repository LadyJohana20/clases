

//Importamos app configurada como un servidor
//cuando importamos de nuestro propio 
const app = require("./index");

//Importamos dotenv para traer el puerto del .env
require("dotenv").config();



//puerto de servidor
const PORT = process.env.PORT || 9000;


//Ejecutamos la aplicacion
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
    console.log(`*******************************`);
    console.log(process.env);
    console.log(`*******************************`);
    console.log(process);
});