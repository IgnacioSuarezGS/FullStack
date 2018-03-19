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
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        tweets: []
    },
    {
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        tweets: []
    },
    {
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        tweets: []
    },
    {
        name: "Chelsey Dietrich",
        email: "Lucio_Hettinger@annie.ca",
        tweets: []
    }
];

function addUser(newUser) {
    let user = {
        name: "",
        email: "",
        tweets: []
    };
    let isValid = validateUser(newUser);
    if (isValid === true) {
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
    let validName = validateName(user.name);
    let validEmail = validateEmail(user.email);
    if (validName === true && validEmail === true) {
        return true;
    } else if (validName != true && validEmail != true) {
        return "FATAL ERROR";
    } else if (validName != true) {
        return validName;
    } else if (validEmail != true) {
        return validEmail;
    }
}

function validateName(name) {
    if (name.length < 7) {
        return 'No puedes tener un nombre con menos de 7 caracteres';
    } else if (name.length > 60) {
        return '¿Rejentas el Badulaque? ¿De dónde coño te sacaste el nombre ese de más de 60 caracteres?'
    }
    let result = true;
    users.forEach(user => {
        if (user.name == name) {
            result = "El usuario ya existe";
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

app.listen(3000, (error) => {
    console.log("Server listen in port 3000");
});