const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la'
}

const argv = require('yargs')
    .command('crear', 'Genera un elemento por hacer', { descripcion })
    .command('borrar', 'borra un elemento por hacer segun descripción', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .help()
    .argv;

module.exports = {
    argv
}