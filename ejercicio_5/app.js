
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function persona(dato){
 
  console.log("Nombre: " + dato.results[0].name.first + " " +"Apellido: "+ dato.results[0].name.last);
  console.log("Genero: " + dato.results[0].gender);

}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(persona);
