const argv = require('./config/yargs').argv;
const colors = require('colors');


const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        // console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log('========Por Hacer=========='.red);
            console.log(tarea.descripcion);
            console.log('estado:', tarea.completado);
            console.log('==========================='.red);
        }

        break;

    case 'actualizar':
        // console.log('actualizar una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}