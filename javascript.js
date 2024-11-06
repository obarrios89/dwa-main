
//arrow function-funciones flecha

//funcion normal
function prueba() {
    return "Hola";
}
prueba();
console.log(prueba());

/*
//otra forma de declarar una funcion es cargando en una variable
let prueba = "";

prueba = function() {
    return "Hello World!";
  }
console.log(prueba());

//lo mismo pero con flecha
prueba = () => {
  return "Hello World!";
}
console.log(prueba());

//resumido
let prueba = "";
prueba = () => "Hello World!";
console.log(prueba());


//codigo asincrono
console.log("1");    
console.log("2");
console.log("3");
console.log("4");



console.log("1");
setTimeout(function () {
    console.log("2");
}, 5000);
console.log("3");
console.log("4");

console.log("1");

function esperar(){
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            console.log("2");
            resolve()
        }, 5000);
    }
)
}

async function ejecutar() {
    await esperar();
    console.log("3");
}

ejecutar();



try {
    
} catch (error) {
    
}
*/

