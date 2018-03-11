var usuarios = [
    {
        "nombre": "Gustav Fransua",
        "email": "gustav@gmail.com" 
    },
    {
        "nombre": "Francisco Paco",
        "email": "fran@gmail.com"
    },
    {
        "nombre": "Manolín Vega",
        "email": "vega.manolin@gmail.com"
    },
    {
        "nombre": "Orlando Florencio",
        "email": "orlan@gmail.com"
    },
    {
        "nombre": "Andrea Pérez",
        "email": "andre.perez@gmail.com"
    },
    {
        "nombre": "Floren Hi",
        "email": "crypto@gmail.com"
    },
    {
        "nombre": "Pedro García",
        "email": "pedrogar@gmail.com"
    },
    {
        "nombre": "Elena Ramírez",
        "email": "elenra@gmail.com"
    }
];


var alojamientos = [
    {
     "nombre": "RIU",
     "comentarios": [{
       "usuario": "Manolín Vega",
       "comentario": "Estancia agradable",
       "valoracion": 8.5
     }, {
       "usuario": "Orlando Florencio",
       "comentario": "Bonito el sitio",
       "valoracion": 7
     }, {
       "usuario": "Andrea Pérez",
       "comentario": "Estancia inolvidable",
       "valoracion": 10
     }]
   },
   {
     "nombre": "Nacho Sol",
     "comentarios": [{
       "usuario": "Floren Hi",
       "comentario": "Un lugar para pensar en cryptos y mucho sol",
       "valoracion": 10
     }, {
       "usuario": "Pedro García",
       "comentario": "Decente tirando a bajo",
       "valoracion": 4
     }]
   },
   {
     "nombre": "Hilton",
     "comentarios": [{
       "usuario": "Elena Ramírez",
       "comentario": "Todo fantástico, acorde con el precio",
       "valoracion": 10
     }, {
       "usuario": "Gustav Fransua",
       "comentario": "Best sitio in the world",
       "valoracion": 10
     }, {
       "usuario": "Francisco Paco",
       "comentario": "Lo mejor la comida",
       "valoracion": 9.5
     }]
   },
   {
     "nombre": "El desastrillo",
     "comentarios": [{
       "usuario": "Manolín Vega",
       "comentario": "Chiquita porquería",
       "valoracion": 3
     }]
   }
 ];

 var nombreUsuarios = usuarios.map(usuario => usuario.nombre);
 console.log(nombreUsuarios);

 var comentariosUsuarios = alojamientos.find(alojamiento => alojamiento.comentarios.filter(usuario => usuario == "Gustav Fransua"));
 console.log(comentariosUsuarios);

 alojamientos.forEach(alojamiento =>{
   console.log(alojamiento.nombre)
   alojamiento.comentarios.forEach(comentario => {
     console.log(alojamiento)
     var nombreHotel = alojamiento.nombre;
     var puntyuacion =comentario.valoraciones;
     var nombreUsuario = comentario.usuario;

     var usuario = usuarios.find(user => user.nombre === nombreUsuario);
     console.log (usuario);
    if(!usuario.valoraciones){

      usuario.valoraciones.push({hotel: nombreHotel, nota: puntuacion})
    }
   })
 })