
const requestPromise = require("request-promise");
const { get } = require("request-promise");
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido



  obtenerChiste().then((response) =>{
    console.log (response);
    console.log('Su consulta se ejecuto con exito');
  }).catch((error) => {
      console.log('error');
  });


