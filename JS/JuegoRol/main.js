var characters = ["orco", "mago", "humano", "elfo"];
var currentStages = [];
var situations = [{
        texto: "1",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "1BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "1MAL",
        menos_vida_si_mal: 0
    },
    {
        texto: "2",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "2BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "2MAL",
        menos_vida_si_mal: 0
    },
    {
        texto: "3",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "3BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "3MAL",
        menos_vida_si_mal: 0
    },
    {
        texto: "4",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "4BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "4MAL",
        menos_vida_si_mal: 0
    },
    {
        texto: "5",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "5BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "5MAL",
        menos_vida_si_mal: 0
    },
    {
        texto: "6",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "6BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "6MAL",
        menos_vida_si_mal: 0
    },
    {
        texto: "7",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "7BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "7MAL",
        menos_vida_si_mal: 0
    },
    {
        texto: "8",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "8BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "8MAL",
        menos_vida_si_mal: 0
    },
    {
        texto: "9",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "9BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "9",
        menos_vida_si_mal: 0
    },
    {
        texto: "10",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "10BIEN",
        puntos_si_gana: 0,
        resultado_si_mal: "10MAL",
        menos_vida_si_mal: 0
    }

];

var player = {
    name: "",
    type: "",
    health: 100,
    points: 0
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function newPlayer(player) {
    newCharacter(player);
}

function newCharacter(player) {
    var newCharacter = prompt(`¿Qué quieres ser en tu viaje? ¿${characters}?`);
    if (characters.indexOf(newCharacter) >= 0) {
        player.type = newCharacter;
        player.name = prompt(`¿Cuál es tu nombre ${newCharacter}`);

    } else {
        alert('¿Qué clase de criatura es esa?');
        newPlayer(player);
    }
}

function newStory(currentStages) {
    for (var stage = 0; stage < 5; stage++) {
        let currentStage = {
            level: 0,
            data: {}
        }
        currentStage.level = stage + 1;
        currentStage.data = situations[getRandomInt(0, situations.length)];
        currentStages.push(currentStage);
    }
}

function newStage(stage, player) {
    let win = true;
    alert(`Nivel: ${stage.level} Tu Vida: ${player.health}\n\n${stage.data.texto}\nNecesitas un ${stage.data.minimo_dado} para ganar\n\nTIRA EL DADO`);
    let numero = getRandomInt(1, 12);
    if (numero >= stage.data.minimo_dado) {
        alert(`Has Sacado un ${numero} y ${stage.data.resultado_si_bien}`)
    } else {
        alert(`Has Sacado un ${numero} y ${stage.data.resultado_si_mal}`)
    }
}

function results(player, state) {
    var maxScore= cargarPuntuacionMax();
    if(maxScore.points < player.points || maxScore.name == null) {
        nuevaPuntuacionMax(player)
        maxScore= cargarPuntuacionMax()
    };
    alert(`${state}\nVida: ${player.health}\nPuntos:${player.points}\n\nPuntuación Máxima: ${maxScore.name} ${maxScore.points}`);
}

function nuevaPuntuacionMax(player) {
    localStorage.setItem('champion', JSON.stringify(player.name));
    localStorage.setItem('maxScore', JSON.stringify(player.points));
}

function cargarPuntuacionMax() {
    var bestScore = {
        name: "",
        points: 0
    }
    bestScore.name = JSON.parse(localStorage.getItem('champion'))
    bestScore.points = parseInt(JSON.parse(localStorage.getItem('maxScore')));
    return bestScore;
}


newPlayer(player);
newStory(currentStages);
currentStages.forEach(stage => {
    if (player.health <= 0) {
        results(player, "YOU LOSE");
    } else {
        if (newStage(stage, player) === false) {
            player.health - stage.data.menos_vida_si_mal;
        } else {
            player.points + stage.data.puntos_si_gana;
        }
    }
});

results(player, "YOU WIN");