const { crearArchivo } = require('./multiplicar/multiplicar')

let base = "4";

console.log(process);

crearArchivo(base)
    .then((archivo) => console.log(`Archivo creado ${archivo}`))
    .catch((e) => console.log(e));