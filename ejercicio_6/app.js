
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then((dato) =>{
console.log(dato.results[0].name.first);
console.log(dato.results[0].name.last);
console.log(dato.results[0].gender);
console.log('Su consulta se ejecuto con exito')

}).catch((error)=>{
    console.log('Error')
});



