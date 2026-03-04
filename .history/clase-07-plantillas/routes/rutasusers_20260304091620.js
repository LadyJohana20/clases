//1 importamos rutas de express
const { Router } = require("express");


// 2 ejecutamos las funcionalidades del router
const router = Router();

//3. Rutas del GET
router.get("/usuarios", (req, res) => {
    res.send("la lista de usuarios es: Juan, Maria, Pedro ");
});

// 4 creamos una ruta del post para agregar un nuevo usuario
router.post("/usuarios", (req, res) => {
    const user = req.body;
    res.send(`El usuario ${user.nombre} ha sido agregado correctamente`);
});

// creamos una ruta del put para actualizar un usuario
router.put("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    const user = req.body;
    res.send(`El usuario con id ${id} ha sido actualizado correctamente con el nombre ${user.nombre}`);
});

//5. Exportamos el router para usarlo en el index.js
module.exports = router;
