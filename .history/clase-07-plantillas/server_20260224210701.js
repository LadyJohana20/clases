

//Importamos app configurada como un servidor
const app = require("app");


//Ejecutamos la aplicacion
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});