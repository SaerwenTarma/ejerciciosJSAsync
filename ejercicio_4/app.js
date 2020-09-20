
const obtenerPokemon = require("./library");


obtenerPokemon("pidgeot").then((response) =>{
    console.log(response.name);
    console.log('Consulta con exito');
    console.log("Abilities ");
      response.abilities.forEach(ab => {
          console.log( ab.ability.name)});
}).catch((error) =>{
    console.log('error');
});



// Usar la funcion obtenerPokemon(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido

