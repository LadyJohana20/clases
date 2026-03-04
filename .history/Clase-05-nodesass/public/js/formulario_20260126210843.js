//1. Verificamos si el usuario esta logeado
let loginStatus = localStorage.getItem("loginStatus");

//2. Si no esta logeado, redirigimos a la pagina de login
if (loginStatus !== "true") {
    window.location.href = "./index.html";
}

//3. agregamos funcionalidad de cerrar sesión

let cerrarSesionBtn = document.getElementById('cerrar');
cerrarSesionBtn.addEventListener('click', () => {
    //Limpiamos el localStorage
    localStorage.setItem("loginStatus", "false");
    //Redirigimos a la pagina de login
    window.location.href = "../index.html";
} );