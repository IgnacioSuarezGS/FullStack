var alojamientos = [{
        nombre: 'Bahía Feliz',
        comentarios: [{
                usuario: 'Franz Kartofen',
                comentario: 'Gut',
                valoracion: 6
            },
            {
                usuario: 'Ferdinando',
                comentario: 'Muy bueno',
                valoracion: 9
            },
            {
                usuario: 'Roberthino',
                comentario: 'Molto malo',
                valoracion: 3
            },
        ],
        media: 0
    },
    {
        nombre: 'Nacho Sol',
        comentarios: [{
                usuario: 'Manolín',
                comentario: 'Estuvo chido',
                valoracion: 10
            },
            {
                usuario: 'Solete',
                comentario: 'Muy sucio',
                valoracion: 2
            }
        ],
        media: 0
    }

]

function calcularMedia(valoraciones) {
    numeroValoraciones = valoraciones.length;
    let total = 0;
    for (let i = 0; i < numeroValoraciones; i++) {
        total += valoraciones[i];
    }
    total = total/numeroValoraciones;
    return total;
}

var valoraciones = [];
valoraciones = alojamientos.map(alojamiento => alojamiento.comentarios.map(comentario => comentario.valoracion));

var numeroAlojamientos = alojamientos.length;
for (let i = 0; i < numeroAlojamientos; i++) {
    let total = calcularMedia(valoraciones[i]);
    alojamientos[i].media = total;
}
console.log(alojamientos);