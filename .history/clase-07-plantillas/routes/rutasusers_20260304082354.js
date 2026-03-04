//1 importamos rutas de express
const { Router } = require("express");


// 2 ejecutamos las funcionalidades del router
const router = Router();

//3. Rutas del GET
router.get("/usuarios", (req, res) => {
    res.send("la ista de usuarios es: Juan, Maria, Pedro ");
});

// 4 creamos una ruta del post para agregar un nuevo usuario
router.post("/usuarios", (req, res) => {
    const user = req.body;
    res.send(`El usuario ${user} ha sido agregado correctamente`);
});