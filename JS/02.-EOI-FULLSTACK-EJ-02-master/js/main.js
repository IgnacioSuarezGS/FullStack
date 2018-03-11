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
    validateName(user.name, errors);
    validateMail(user.mail, errors);
    validateAge(user.age, errors);
    return errors;
}

function validateName(name, errors) {
    let nameLength = name.length;
    if (nameLength < 5) {
        errors.push({
            code: 'sort-name',
            text: 'El nombre debe tener al menos 5 caracteres'
        });
    } else if (nameLength > 60) {
        errors.push({
            code: 'large-name',
            text: '¿Rejentas el Badulaque? ¿De dónde coño te sacaste el nombre ese de más de 60 caracteres?'
        });
    }
    let arrayNumeros = name.match(/\d/);
    if (arrayNumeros != null) {
        errors.push({
            code: 'numbers-in-name',
            text: 'No puedes poner números en el nombre'
        });
    }
}

function validateMail(mail, errors) {
    if (mail.length < 7) {
        errors.push({
            code: 'lt-seven',
            text: 'No puedes tener un email con menos de 7 caracteres'
        });
    } else if (mail.length > 60) {
        errors.push({
            code: 'mt-60',
            text: 'Tio no se que tan paranoico eres, pero eso son demasiadas letras para alguien normal'
        });
    }
    let ats = 0;
    for (let i = 0; i < mail.length; i++) {
        if (mail.charAt(i) === "@") {
            ats++;
        }
    }
    if (ats > 1) {
        errors.push({
            code: 'mt-one-at',
            text: 'No puedes poner tantas @'
        });
    } else if (ats == 1) {
        let at = mail.indexOf("@");
        if (mail.substring(0, at).length <= 0) {
            errors.push({
                code: 'email-not-started',
                text: 'Tu correo debe tener un inicio'
            });
        }
        if (mail.substring(at).length - 1 <= 0) {
            errors.push({
                code: 'email-not-finished',
                text: 'No has indicado el nombre de tu proveedor de correo'
            });
        }
    }
}

function validateAge(age, errors) {
    if (age < 5 || age > 150) {
        errors.push({
            code: 'wrong-age',
            text: 'La edad debe estar entre 5 y 150 tolete'
        });
    }
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
    if (nDigits == null) {
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


function ejercicio06(user, id) {
    var currentUser = normalizeUser(user);
    var errors = validateUser(currentUser);
    var isValid = true;
    var result = {
        id: "notSet",
        valid: "",
        errors: []
    };
    if (id == undefined) id = "notSet";
    if (errors.length > 0) isValid = false;
    result = {
        id: id,
        valid: isValid,
        errors: errors
    }
    return result;
}



////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users) {
    var allUsers = [];
    var result = {
        items_inserted: 0,
        ids: [],
        with_errors: [],
        users_stored: []
    };

    for (let i = 0; i < users.length; i++) {
        allUsers.push(ejercicio06(users[i], i + 1));
    };

    result.items_inserted = allUsers.length;
    result.ids = allUsers.map(user => user.id);
    result.with_errors = allUsers.filter(user => user.valid == false);
    result.users_stored = allUsers.filter(user => user.valid == true);
    return result;
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////