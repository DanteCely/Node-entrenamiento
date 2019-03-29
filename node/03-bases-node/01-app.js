const argv = require('yargs')
    .command('listar', 'Imprime en consola la abla de multiplicar', {
        base: {
            demand: true,
            alias: 'b',
        },
        limite: {
            alias: 'l',
            default: 10,
        }
    })
    .argv;
const { crearArchivo } = require('./multiplicar/multiplicar');

console.log('Limite', argv.limite);


// let parametro = process.argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then((archivo) => console.log(`Archivo creado ${archivo}`))
//     .catch((e) => console.log(e));