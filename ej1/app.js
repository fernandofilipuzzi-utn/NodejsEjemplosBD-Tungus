var tungus = require('tungus');
const mongoose = require('mongoose')
const Parametro = require('./models/Parametro')


console.log('Running mongoose version %s', mongoose.version);

mongoose.connect('tingodb://' + __dirname + '/data', function (err) {
    if (err) throw err;
})

//{ nombre: "param1", valor: 'valor'}
function crearParametro(nuevo)
{
    Parametro.create(nuevo, (error, blogpost) => {
        console.log(error, blogpost)
    })
    return nuevo;
}

// function buscarPorNombre(nombre) {
//     Parametro.findOne({ nombre }).exec((err, parametroEncontrado) => {
//         if (err) {
//             console.error('Error al buscar por nombre:', err);
//         } else {
//             if (parametroEncontrado) {
//                 console.log(`Parámetro encontrado por nombre: ${parametroEncontrado.nombre}, Valor: ${parametroEncontrado.valor}`);
//             } else {
//                 console.log('No se encontró un parámetro con el nombre especificado.');
//             }
//         }
//     });
// }

// // Ejemplo de uso
// //const nuevoParametro = { nombre: 'param1', valor: 'valor' };
// //crearParametro(nuevoParametro);

// // Buscar por nombre después de un tiempo (simulando la asincronía)
// setTimeout(() => {
//     buscarPorNombre('param2');
// }, 1000); // Puedes ajustar el tiempo según tus necesidades

function buscarPorNombre(nombre, callback) {
    Parametro.findOne({ nombre }).exec((err, parametroEncontrado) => {
        if (err) {
            console.error('Error al buscar por nombre:', err);
        } else {
            if (parametroEncontrado) {
                console.log(`Parámetro encontrado por nombre: ${parametroEncontrado.nombre}, Valor: ${parametroEncontrado.valor}`);
                callback(parametroEncontrado);
            } else {
                console.log('No se encontró un parámetro con el nombre especificado.');
            }
        }
    });    
}

buscarPorNombre('param1', (parametro)=>{
    if(parametro)
        console.log(parametro.valor);
    else
        console.log("no encontrado");
});