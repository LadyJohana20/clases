

// 1. capturamos el elemento principal

const divPrincipal = document.getElementById("principal");

// 2. Creamos la barra de navegación
let navegación = document.createElement('nav');

// 3. le agregamos estilos

navegación.style.backgroundColor = '#2c0c64 ';
navegación.style.width = '100%';
navegación.style.height = '60px';
navegación.style.display = 'flex';
navegación.style.alignItems = 'center';
navegación.style.paddingLeft = '20px';

//4. Agregamos barra de navegacion al div principal
divPrincipal.appendChild(navegación);

//5. agregamos un evento a la navegacion
/*navegación.addEventListener('click', () => {
    alert('Hola, soy la barra de navegación');
});*/

//6. Creamos la lista de navegación
let listaNavegacion = document.createElement('ul');

//7. creamos los 3 items de la lista
let listHome = document.createElement('li');
listHome.innerText = 'Home';
listHome.style.display = 'inline';
listHome.style.color = 'white';
listHome.style.cursor = 'pointer';
listHome.addEventListener("click", () => {
    window.location.href = '../index.html';
});

//8. creamos el ancla del primer item
/*let anclaHome = document.createElement('a');
anclaHome.href = '../pages/index.html';*/

// agregamos el ancla a la barra de navegación
/*lisHome.appendChild(anclaHome);*/

//9. agregamos el primer item a la lista
listaNavegacion.appendChild(listHome);


let listProductos = document.createElement('li');
listProductos.innerText = 'Productos';
listProductos.style.display = 'inline';
listProductos.style.color = 'white';
listProductos.style.marginLeft = '20px';
listProductos.style.cursor = 'pointer';
lisProductos.addEventListener("click", () => {
    window.location.href = './productos.html';
});

listaNavegacion.appendChild(listProductos);


let listFormulario = document.createElement('li');
listFormulario.innerText = 'Formulario';
listFormulario.style.display = 'inline';
listFormulario.style.color = 'white';
listFormulario.style.marginLeft = '20px';
listFormulario.style.cursor = 'pointer';
lisFormulario.addEventListener("click", () => {
    window.location.href = './formulario.html';
});

listaNavegacion.appendChild(listFormulario);

//10. subimos el ul a la barra de navegación
navegación.appendChild(listaNavegacion);


// 11. capturamos todos los elementos o html con la clase titulo
// es una coleccion de nodos(array) llamado HTMLCollection

let titulo = document.getElementsByClassName('titulo');

// 12. imprimimos consola  la coleccion de nodos
console.log(titulo);

// 13. modificamos los estilos para el primer elemento de la coleccion
/*titulo.innerText = 'Productos';*/
titulo[0].style.color = '#2c0c64';
titulo[0].style.fontFamily = 'Arial, sans-serif';
titulo[0].style.fontSize = '36px';
titulo[0].style.textAlign = 'center';
titulo[0].style.marginTop = '20px';

// 14. damos stilos a la tabla de productos o al elemento 1
titulo[1].style.width = '80%';
titulo[1].style.margin = '20px auto';
titulo[1].style.borderCollapse = 'collapse';    
titulo[1].style.fontFamily = 'Arial, sans-serif';

// 15. tomamos el array de productos del local storage
let dataProductos = localStorage.getItem("productos");

console.log(dataProductos); // sin parsear los datos

let parrafo = document.getElementById("sin-parsear");

parrafo.innerText = dataProductos;

// 15. Parseamos los datos para convertirlos en un array de objetos literales
dataProductos = JSON.parse(dataProductos);

console.log(dataProductos); // ya parseado

// 16. Capturar el parrafo paseado
let parrafoParseado = document.getElementById("parseado");

parrafoParseado.innerText = dataProductos; 

// 17. Capturamos la tabla  (tbody)
let cuerpoTabla = document.getElementById("tabla-productos");

// 18. Capturamos el boton y le damos funcionalidad
let botonCargar = document.getElementById("cargarProductos");

// le agregamos estilos al boton
botonCargar.style.textAlign = "center";


botonCargar.addEventListener("click", (e) => {

    e.preventDefault();

    // limpiamos el contenido previo del cuerpo de la tabla
    cuerpoTabla.innerHTML = "";

    for (let i = 0; i < dataProductos.length; i++) {
        console.log(dataProductos[i]);

        // 19. Creamos una fila por cada producto
        let fila = document.createElement("tr");

        //20. Creamos las celdas por cada producto
        let celdaNombre = document.createElement("td");
        celdaNombre.innerText = dataProductos[i].nombre;
        celdaNombre.style.border = "1px solid #ddd";
        celdaNombre.style.padding = "8px";

        // 21. Agregamos la celda a la fila
        fila.appendChild(celdaNombre);

        // 22. Agregamos la fila al cuerpo de la tabla
        cuerpoTabla.appendChild(fila);

        let celdaPrecio = document.createElement("td");
        celdaPrecio.innerText = `$ ${dataProductos[i].precio.toFixed(2)}`;
        celdaPrecio.style.border = "1px solid #ddd";
        celdaPrecio.style.padding = "8px";

        fila.appendChild(celdaPrecio);

        cuerpoTabla.appendChild(fila);

        let celdaStock = document.createElement("td");
        celdaStock.innerText = dataProductos[i].stock;
        celdaStock.style.border = "1px solid #ddd";
        celdaStock.style.padding = "8px";

        fila.appendChild(celdaStock);

        cuerpoTabla.appendChild(fila);
        
    }

});
