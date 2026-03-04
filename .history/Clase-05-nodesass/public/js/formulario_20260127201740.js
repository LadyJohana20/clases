
/* 
A. Funcionalidad de control del login y logout */


//1. Verificamos si el usuario esta logeado
let loginStatus = localStorage.getItem("loginStatus");

//2. Si no esta logeado, redirigimos a la pagina de login

if (loginStatus !== "true") {
    // enviamos una alerta y redirigimos
    alert("Por favor inicie sesión para acceder a esta página.");

    //lo redirugimos a la pagina de login
    window.location.href = "../index.html";
}

//mostramos el nombre de l administrador en la pagina
let userAdmin = document.getElementById('userAdmin');
let adminName = localStorage.getItem("administrador");

userAdmin.innerText = `Bienvenido: ${adminName}`;


//3. agregamos funcionalidad de cerrar sesión

let cerrarSesionBtn = document.getElementById('cerrar');
cerrarSesionBtn.addEventListener('click', () => {
    
    
    //Limpiamos el localStorage
    localStorage.removeItem("administrador");
    localStorage.removeItem("email");
    localStorage.setItem("loginStatus", "false");

    //borrar todo el localStorage
    localStorage.clear();
    
    //Redirigimos a la pagina de login
    window.location.href = "../index.html";
} );

/*
B. funciones para datos del formulario y localstoage
*/


// Creamos un array para almacenar los productos si no existe
let productos = [];

let formProductos= document.getElementById('formProductos');

formProductos.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtenemos los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let stock = document.getElementById('stock').value;
    
    //creamos un objeto producto
    let producto = {
        nombre: nombre,
        precio: parseFloat(precio),
        stock: parseInt(stock)
    };
    
    //confirmamos la creacion del producto
    console.log(producto);

    // Agregamos el producto al array
    productos.push(producto);

    //confirmamos que el producto se agrego al array
    console.log(productos);

// Guardamos el array en el localStorage
    localStorage.setItem('productos', JSON.stringify(productos));

        
        
  });

