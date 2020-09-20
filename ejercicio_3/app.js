
const obtenerPokemon = require("./library");

// Codigo funcion callback


  function datos (pokemon){
     console.log("Pokemon name " + pokemon.name);
      console.log("Abilities ");
      pokemon.abilities.forEach(ab => {
          console.log(ab.ability.name)
      });
   };
   




// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("beedrill",datos);
