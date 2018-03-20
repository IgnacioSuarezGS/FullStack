const express = require('express')
const app = express();
const tweet = {
    id: "",
    text: "",
    owner: "",
    createdAt: 0
}

var tweets = [];

var users = [{
        username: "1234567",
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        tweets: []
    },
    {
        username: "2345678",
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        tweets: []
    },
    {
        username: "3456789",
        name: "Clementine",
        email: "Nathan@yesenia.net",
        tweets: []
    },
    {
        username: "4567891",
        name: "Chelsey Dietrich",
        email: "Lucio_Hettinger@annie.ca",
        tweets: []
    }
];

function addUser(newUser) {
    let user = {
        username: "",
        name: "",
        email: "",
        tweets: []
    };
    let isValid = validateUser(newUser);
    if (isValid === true) {
        user.username = newUser.username;
        user.name = newUser.name;
        user.email = newUser.email;
        users.push(user);
        return true;
    } else {
        return isValid;
    }
}

function validateUser(user) {
    user.email = user.email.toLowerCase();
    let validUsername = validateName(user.username, "username");
    let validName = validateName(user.name, "name");
    let validEmail = validateEmail(user.email);
    if (validName === true && validEmail === true && validUsername === true) {
        return true;
    } else if (validName != true && validEmail != true && validUsername != true) {
        return "FATAL ERROR";
    } else if (validUsername != true) {
        return validUsername;
    } else if (validName != true) {
        return validName;
    } else if (validEmail != true) {
        return validEmail;
    }
}

function validateName(name, type) {
    if (name.length < 7) {
        return `No puedes tener un ${type} con menos de 7 caracteres`;
    } else if (name.length > 60) {
        return `¿Rejentas el Badulaque? ¿De dónde coño te sacaste el ${type} ese de más de 60 caracteres?`
    }
    let result = true;
    users.forEach(user => {
        if (user[type] == name) {
            result = `Ese ${type} ya existe`;
        }
    });
    return result;
}

function validateEmail(email) {
    if (email.length < 7) {
        return 'No puedes tener un email con menos de 7 caracteres';
    } else if (email.length > 60) {
        return 'Tio no se que tan paranoico eres, pero eso son demasiadas letras para alguien normal'
    }
    let ats = 0;
    for (let i = 0; i < email.length; i++) {
        if (email.charAt(i) === "@") {
            ats++;
        }
    }
    if (ats > 1) {
        return 'No puedes poner tantas @';
    } else if (ats == 1) {
        let at = email.indexOf("@");
        if (email.substring(0, at).length <= 0) {
            return 'Tu correo debe tener un inicio';
        }
        if (email.substring(at).length - 1 <= 0) {
            return 'No has indicado el nombre de tu proveedor de correo';

        }
    } else {
        return "Tu email debe tener un @";
    }
    let result = true;
    users.forEach(user => {
        if (user.email == email) {
            result = "El email ya existe";
        }
    });
    return result;
}

app.use(express.json());

app.get('/', function (req, res) {
    res.send("papa");
});

app.get('/users', function (req, res) {
    res.json(users);
});

app.post('/users', function (req, res) {
    console.log(req.body);
    let newUser = addUser(req.body);
    if (newUser === true) {
        res.json(users);
    } else {
        res.json(newUser);
    }
})

app.delete('/users/:username', function (req, res) {
    let username = req.params.username;
    let whereIs = users.findIndex(user => user.username == username);
    if (whereIs != -1) {
        users.splice(whereIs, 1);
        res.send(`El usuario ${username} ha sido borrado`);
    } else {
        res.send(`${username} no existe`)
    }
});

app.patch('/users/:username', function (req, res) {
    let errors = [];
    let username = req.params.username;
    let dataUser = req.body;
    let whereIs = users.findIndex(user => user.username == username);
    if (whereIs != -1) {
        if (dataUser.name) {
            let isValid = validateName(dataUser.name, "name");
            if (isValid === true) {
                users[whereIs].name = dataUser.name;
            } else {
                errors.push(isValid);
            }
        }
        if (dataUser.email) {
            let isValid = validateEmail(dataUser.email);
            if (isValid === true) {
                users[whereIs].email = dataUser.email;
            } else {
                errors.push(isValid);
            }
        }
        if (!dataUser.name && !dataUser.email) {
            res.send('No se ha pasado nigún parámetro válido');
        } else {
            res.json({users , errors});
        }
    }
});

app.listen(3000, (error) => {
    console.log("Server listen in port 3000");
});