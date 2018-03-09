function normalizeEmail(email) {
    var newMail = {
        correo: "",
        longitudEmail: "",
        correoCapital: ""
    }
    newMail.correo = email.toLowerCase();
    newMail.longitudEmail = newMail.correo.length;
    newMail.correoCapital = newMail.correo.toUpperCase();
    return newMail;
}

function normalizeUser(user) {
    var newUser = {
        name: "",
        mail: "",
        age: 0
    }
    newUser.name = user.nombre.toLowerCase();
    newUser.mail = user.correo.toLowerCase();
    newUser.age = validateNumbers(parseInt(user.edad));
    return newUser;
}

function validateNumbers(number) {
    if (number == null || isNaN(number) == true || number.length < 0) {
        return 0;
    } else {
        return number;
    }
}

function validateUser(user) {
    var isValid = true;
    var errors = [];
    if (user.name.length < 5 && isValid === true) {
        isValid = false;
        errors.push({
            code: '',
            text: ''
        });
    } else if (user.name.length > 60 && isValid === true)
        isValid = false;
    errors.push({
        code: '',
        text: ''
    });
    var parametroBusqueda = "^[a-zñ]+[a-zñ\s]+[a-zñ]$";
    content(user.name, parametroBusqueda);
    // if () {}

    //     { 
    //         valid : true/false,
    //         errors? : [
    //        {
    //                code : 'email_invalid_min_length'
    //                text : 'El correo [correo] debe contener más de 7 caracteres.'
    //        }, ...
    //        ]
    //    }
}

function content(string, parametro) {
    return string.indexOf(parametro)
}

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email) {
    var emailsPosibles = ["yunior.developer@hotmail.com", "miguel@mrbug.es", "imanol@mercadona.com"];
    var mailState = false;
    emailsPosibles.forEach(function (mailUser) {
        if (email === mailUser) {
            mailState = true;
        }
    });
    return mailState;
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email) {
    var mail = normalizeEmail(email);
    var numeroMs = 0;

    for (var i = 0; i < mail.longitudEmail; i++) {
        if (mail.correo.charAt(i) === "m") {
            numeroMs++;
        }
    }

    if (numeroMs > 0) {
        return `El correo ${mail.correo} tiene ${mail.longitudEmail} caracteres y en mayúsculas se quedaría así ${mail.correoCapital}. Además contiene ${numeroMs} letras M`
    } else {
        return `El correo ${mail.correo} tiene ${mail.longitudEmail} caracteres y en mayúsculas se quedaría así ${mail.correoCapital}. Además no contiene letras M`
    }

}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email) {
    var mail = normalizeEmail(email);
    var lastAt = mail.correo.lastIndexOf('@');
    // Substring corta una string desde un punto determinado a otro segundo parametro exclusivo
    var domain = mail.correo.substring(lastAt + 1, mail.longitudEmail);
    var host = mail.correo.substring(0, lastAt);
    var hostLength = host.length;
    // alert("cliente: " + host + "\n" + "dominio: " + domain);
    // Match crea un array con las coincidencias
    var nDigits = mail.correo.match(/\d/g); // Expresión Regular que significa todos los dígitos, cuando termina en g se buscan varias apariciones
    if(nDigits == null) {
        nDigits = 0;
    }
    if (0 === nDigits) {
        return `El correo ${mail.correo} pertenece al dominio ${domain} y tiene ${hostLength} caracteres sin contar el dominio ni el @. Además, el correo no contiene ningún número`
    } else {
        return `El correo ${mail.correo} pertenece al dominio ${domain} y tiene ${hostLength} caracteres sin contar el dominio ni el @. Además, el correo contiene ${nDigits.length} número/s`
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user) {
    //.nombre .edad .correo
    var currentUser = normalizeUser(user);
    if (currentUser.age == 0) {
        return "Chacho Mostro aprende a poner bien la Edad"
    } else if (currentUser.age >= 18) {
        return `El usuario ${currentUser.name} es mayor de edad. Por lo tanto le he creado un usuario con el correo ${currentUser.mail}`;
    } else if (currentUser.age < 18) {
        return `El usuario ${currentUser.name} NO es mayor de edad`;
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user) {
    var yunior = {
        name: "yunior",
        mail: "a@a.com",
        age: 24
    }
    var currentUser = normalizeUser(user);
    if (yunior.name === currentUser.name && yunior.mail === currentUser.mail && yunior.age === currentUser.age) {
        return "La persona introducida es Yunior"
    } else if (yunior.name === currentUser.name || yunior.mail === currentUser.mail || yunior.age === currentUser.age) {
        return "La persona introducida puede ser Yunior"
    } else {
        return "La persona introducida no es Yunior"
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


function ejercicio06(user) {
    console.log(user);
    var currentUser = normalizeUser(user);
    console.log(currentUser);
    var state = validateUser(currentUser);

}



////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users) {
    console.log(users);
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////