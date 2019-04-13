const c_opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
};

const a_opts = {
    descripcion: {
        demand: true,
        alias: 'd',
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Mostrar todas las tareas por hacer', c_opts)
    .command('actualizar', 'Actualiza el estado de la tarea específica', a_opts)
    .help()
    .argv;

module.exports = {
    argv,
};