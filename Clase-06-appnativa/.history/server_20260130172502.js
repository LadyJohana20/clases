

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

//6. middleware para parsear JSON
app.use(express.json());

//7. definir ruta para manejar el envio del formulario
app.post('/contacto', (req, res) => {

    const formData = req.body;
    console.log('Datos recibidos del formulario:', formData);
    res.json({ message: 'Formulario recibido correctamente' });
});

// inicio servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
}); 