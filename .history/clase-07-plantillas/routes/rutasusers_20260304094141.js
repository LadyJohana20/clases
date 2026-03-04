//1 importamos rutas de express
const { Router } = require("express");


// 2 ejecutamos las funcionalidades del router
const router = Router();
const fs= require("node:fs");

//3. Rutas del GET
router.get("/usuarios", (req, res) => {
    res.send("la lista de usuarios es: Juan, Maria, Pedro ");
});

// 4 creamos una ruta del post para agregar un nuevo usuario
router.post("/usuarios", (req, res) => {
    const user = req.body;
    res.send(`El usuario ${user.nombre} ha sido agregado correctamente`);
});

// creamos una ruta del delete para eliminar un usuario
router.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    res.send(`El usuario con id ${id} ha sido eliminado correctamente`);
});

//5. Exportamos el router para usarlo en el index.js
module.exports = router;
