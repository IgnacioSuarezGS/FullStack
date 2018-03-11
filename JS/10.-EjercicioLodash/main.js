let servidores = [
    {
        almacenan: '.mp4',
        nodos: ['ordenador1','ordenador2','ordenador3']
    },{
        almacenan: '.mp3',
        nodos: ['ordenador2','ordenador5']
    },{
        almacenan: '.json',
        nodos: ['ordenador1','ordenador4','ordenador6']
    },{
        almacenan: '.png',
        nodos: ['ordenador1', 'ordenador4']
    },{
        almacenan: '.avi',
        nodos: ['ordenador1','ordenador7']
    },
];

var nodos = servidores.filter(servidor => servidor.almacenan == '.mp4' || servidor.almacenan == ".png").map(nodo => nodo.nodos);

// var serverFinal = [];
// console.log(nodos);
// nodos.forEach(nodo => {
//     nodo.forEach(server => {
//         serverFinal.push(server);
//     })
// });

var serverFinal = _.flatten(nodos);

console.log(serverFinal);

serverFinal = _.uniq(serverFinal);

console.log(serverFinal);