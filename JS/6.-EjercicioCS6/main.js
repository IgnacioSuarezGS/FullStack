var correos = [
    {usuario: 'JoseElMaquina', email: 'jose.el.maquina@gmail.com'},
    {usuario: 'PepeElCorrecto', email: 'pepe@corecto.com'},
    {usuario: 'JoseLuisDaBest', email: 'joseluis@dabest.com.eu'},
    {usuario: 'EsteEstaBien', email: 'este@bien.com'},
    {usuario: 'Elcarterista', email: 'elcarterista20@gmail.com'}
];

correos = correos.filter(usuario => !usuario.email.endsWith('@gmail.com'));
console.log(correos);