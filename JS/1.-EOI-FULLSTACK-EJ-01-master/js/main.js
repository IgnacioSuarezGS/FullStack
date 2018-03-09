var userAge, isNumber, numeroEmails;

// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3) {
    // Hacer ParseInt
    if (p1.age > p2.age && p1.age > p3.age) {
        return p1.name;
    } else if (p2.age > p1.age && p2.age > p3.age) {
        return p2.name;
    } else if (p3.age > p1.age && p3.age > p2.age) {
        return p3.name;
    } else {
       return 'Chungo';
    }
}


// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3) {
    // toLowerCase
    if(p1.email === p2.email || p2.email === p3.email || p3.email === p1.email){
        return true;
    } else {
        return false;
    }
}

// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3) {
    userAge = parseInt(prompt('¿Cuántos años tienes MADAFAKA?'));
    isNumber = isNaN(userAge);
    console.log(userAge);
    console.log(isNumber);
    if(isNumber === true){
        alert('Chacho! Khe hiciste Mostro?');
    } else if (userAge > p1.age && userAge > p2.age && userAge > p3.age) {
        return true;
    } else if (userAge < p1.age || userAge < p2.age || userAge < p3.age) {
        return false;
    }
}

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// RESTRICCIÓN: Resuélvelo usando el método .search()
// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()
// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba
// Deja descomentada solo una de las soluciones
function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3) {

    // OPCION UNO
    // numeroEmails = 0;

    // if(p1.email.includes("gmail.com")){
    //     numeroEmails++;
    // }
    // if(p2.email.includes("gmail.com")){
    //     numeroEmails++;
    // } 
    // if(p3.email.includes("gmail.com")){
    //     numeroEmails++;
    // }
    
    // if (numeroEmails != 0){
    //     return numeroEmails;
    // } else {
    //     return "0";
    // }

}