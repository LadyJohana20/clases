console.log('BIENVENIDO AL FRONT DE LA APP');


//Crear una función para el login de un usuario.


//manejo del DOM
let loginForm = document.getElementById('loginForm');
const loginUser = (e) => { 
    e.preventDefault(); //evitar que se recargue la página

    console.log("Iniciando login...");
    
    //capturar los datos del formulario
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let login = "";
  
    //crear el objeto con los datos
    let adminUser= "admin@bootcamp.com";
    let adminPassword= "admin123";
      let adminName = "Juan Perez";

    //creamos logica de validación

    if(email === adminUser && password === adminPassword){
        console.log("Login exitoso");
        login = "true";

        //guardar el nombre del usuario en el localStorage
        localStorage.setItem("administrador", adminName);
        alert("Login exitoso");



        window.location.href = "./pages/formulario.html"; //redireccionar a formulario

    } else {
        console.log("Credenciales Invalidas");
        login = "false";
        alert("Credenciales Invalidas, por favor intente nuevamente.");

        }


    }
    loginForm.addEventListener('submit', loginUser);

    



