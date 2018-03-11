let provincias = [
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Albacete', codigoPostal: '02653'},
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Las Palmas', codigoPostal: '35118'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
    {nombre: 'Madrid', codigoPostal: '28001'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
];

console.log(provincias.map(provincia => provincia.codigoPostal));

var cp = provincias.map(provincia => provincia.codigoPostal);

var cpNoRepeat = _.uniq(cp);

console.log(cpNoRepeat);