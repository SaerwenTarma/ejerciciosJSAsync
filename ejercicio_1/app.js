
const obtenerChiste = require("./library");

// Codigo funcion callback
/*
function chiste(objeto)  {
  console.log(objeto[0].setup);
  console.log(objeto[0].punchline); }
  /*
  console.log(objeto[0]);   Con esot podemos ver que hay dentro de la funcion chiste*/

                     // la funcion chiste va a recibir un objeto un chiste de la url   


function chiste(objeto){
  for(let i of objeto){
    console.log(objeto[0].setup);
    console.log(objeto[0].punchline);
  }
}




// Fin codigo


// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
 obtenerChiste(chiste);
