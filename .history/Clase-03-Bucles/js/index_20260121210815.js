


// Captura de datos del html - h1 con id="titulo"
let titulo = document.getElementById("titulo")
console.log(titulo);

// Modificación del contenido del html
titulo.innerText = "Listado de productos";

// Le damos un estilo al titulo
titulo.style.textAlign = "center";


// // Capturamos datos del form con el input
// // 1. Creamos una variable para cada input
// let nombreProducto;
// let precioProducto;


// // nuestra primer función personalizada
// // if(){}
// function capturaDatos(){
//   // 2. Capturamos los datos del input
//   nombreProducto = document.getElementById("nombreProducto").value;
//   precioProducto = document.getElementById("precioProducto").value;

//   // validamos que los datos no esten vacios
// if(nombreProducto == "" && precioProducto == ""){// si ambos estan vacios
//     alert("El nombre del producto no puede estar vacio");
//     return; // corta la ejecución de la función
//   } 

// if(nombreProducto == "" || precioProducto == "" || precioProducto >= 10){// si el precio es menor o igual a 0
//     alert("El precio del producto no puede estar vacio");
//     return; // corta la ejecución de la función
//   }  
    

//   console.log(nombreProducto);
//   console.log(precioProducto);
// }

/**
 * este es un comentario con jsdoc
 */
//funcion para mostrar la descripcion de los productos
const descripcion = () => {
  window.location.href = "./pages/descripcion.html"
}

let searchFrom = document.getElementById("searchForm");
searchFrom.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario

  let searchInput = document.getElementById("search").value;//captura el valor del input de busqueda

  //lista de productos
  const productos = ["camisa", "pantalon", "zapatos", "gorra", "reloj"];

  //utilizamos el metodo find para buscar el producto
  //let resultado = productos.find();

  //usar for para buscar el producto
  for (let i = 0; i < productos.length; i++) {
    alert("Producto encontrado: " + productos[i]);
    return;
  }
  
  

const productosearching = () => {















// while
/* let cargaDatos = confirm('Desea cargar un producto? (si/no)') 
let indice = 0

while (indice < 3) {
  let nombreProducto = prompt('Ingrese el nombre del producto')

  productos.push(nombreProducto)

  console.log(productos);

  indice++
} */