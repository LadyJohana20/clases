
//Rutas para respuestas GET para enviar al servidor
//importamos router de express
const {Router } = require("express"); 


app.get("/html", (req, res) =>  {
    //enviar html
    res.send(`
        <h1>Bienvenido a la aplicación con Motores de Plantilla</h1>
        `);
    });

    app.get("/descargas", (req, res) =>  {
        //descargar un archivo
        res.download("./hola.pdf", "clase 07.pdf")
    });

    app.get("/json", (req, res) =>  {
        //respondemos con datos tipo Json
        const persona = {
            nombre: "Juan",
            dni: "127854",
            provincia : "Buenos Aires"
        }
        res.json(persona);
    });

    app.get("/file", (req, res) =>  {
        //enviar un archivo
        res.sendFile(path.join(__dirname, "index.html"));
    });

    app.get("/template", (req, res) =>  {
        //enviar un template
        const datosSO = {
            plataforma: os.platform(),
            version: os.version(),
            memoria: os.totalmem(),
            memoriaLibre: os.freemem()
        }

        let total=datosSO.memoria / (1024 * 1024 * 1024);
        let libre=datosSO.memoriaLibre / (1024 * 1024 * 1024);
        res.send(`<h1>Datos del Sistema Operativo</h1>
        <ul>    
            <li>Plataforma: ${datosSO.plataforma}</li>
            <li>Version: ${datosSO.version}</li>
            <li>Memoria Total: ${total.toFixed(2)} MB</li>
            <li>Memoria Libre: ${libre.toFixed(2)} MB</li>
        </ul>`);
    } );
