

//1. cargar express
const express = require('express');

//2. crear modulo path
const path = require('path');

//3. crear una app de express
const app = express();

//4. definir puerto
const PORT = process.env.PORT || 3000;

//5. definir ruta de carpeta public
app.use(express.static(path.join(__dirname, 'public')));   


// inicio servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

 


