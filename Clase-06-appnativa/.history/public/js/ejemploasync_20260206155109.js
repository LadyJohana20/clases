// funciones sicronas
function funcion1() {
    console.log("funcion 1");
}

function funcion2() {
    console.log("funcion 2");
}

//llamamos a las funciones
funcion1();
funcion2();

setTimeout(() => {
    console.log("funcion 3");
}, 3000);

// funciones asincronas
function tareaAsincrona() {
    setTimeout(() => {
        console.log("tarea asincrona completada");
    }, 2000);
}
// tarea asincrona 2 simulacro de conexion a una base de datos
function tareaAsincrona2() {
    setTimeout(() => {
        console.log("tarea asincrona 2 completada");
    }, 1500);
}
tareaAsincrona();
tareaAsincrona2();
console.log("Esto se muestra antes de que la tarea asincrona se complete");