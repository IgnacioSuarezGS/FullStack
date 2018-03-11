var characters = ["orco", "mago", "humano", "elfo"];
var currentStages = [];
var situations = [{
        texto: "Entras en una cueva y te ataca una bandada de murciélagos",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Consigues salir de la cueva y zafarte de ellos",
        puntos_si_gana: 10,
        resultado_si_mal: "Intentando escapar tropiezas y te caes al suelo",
        menos_vida_si_mal: 10
    },
    {
        texto: "Pasando por un puente un troll te exige que pagues",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Golpeas al troll con tu arma y te libras de él",
        puntos_si_gana: 10,
        resultado_si_mal: "Intentas golpearlo, pero fallas; a cambio te llevas una patada en el trasero",
        menos_vida_si_mal: 5
    },
    {
        texto: "Te adentras en el bosque maldito y te atacan enredaderas gigantes",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Te zafas con facilidad. ¡Por dios es solo un hierbajo!",
        puntos_si_gana: 50,
        resultado_si_mal: "Logras cortar la enredadera cuando estás demasiado alto y caes al suelo. ¡Ouch!",
        menos_vida_si_mal: 35
    },
    {
        texto: "Llegas a un prado que se nubla de repente. Aparece un mago oscuro que te ataca con bolas de fuego.",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Esquivas los ataques y al bloquear una bola de fuego rebota y mata al mago. ¡Umm huele a barbacoa!",
        puntos_si_gana: 80,
        resultado_si_mal: "¡Pero que torpe! El fuego te hace pupita",
        menos_vida_si_mal: 45
    },
    {
        texto: "Sigues con tu camino cuando notas una gigantesca sombra encima. ¡Es un dragón!",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Al intentar embestirte te agarras y subes sobre él. Lo hieres en el corazón y sigues con tu camino",
        puntos_si_gana: 80,
        resultado_si_mal: "Al intentar embestirte te agarras y subes sobre él. Te zarandea y te lanza a km. Eso te dolerá mañana",
        menos_vida_si_mal: 50
    },
    {
        texto: "Paseando te topas con un hueco en la tierra, entras en él y te encuentras con que has invadido el mundo de los hombres topos, que te atacan en masa",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Después de una ardua lucha consigues acabar con todos",
        puntos_si_gana: 90,
        resultado_si_mal: "Consigues escapar a duras penas",
        menos_vida_si_mal: 85
    },
    {
        texto: "Anochece y te resguardas en una casa abandonada. Pronto empiezan a suceder cosas muy raras. Los fantasmas invaden la mansión",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Te das cuenta de que son nos cachondos y que solo quieren fiesta; te unes a ellos toda la noche",
        puntos_si_gana: 40,
        resultado_si_mal: "Te lías a repartir tortas, aunque no les hagas nada; atraviesas a uno de ellos y te golpeas contra una pared",
        menos_vida_si_mal: 20
    },
    {
        texto: "Llegas a un lago poco profundo con una piedra en el centro; te tumbas sobre ella y te das cuenta de que respira; se alza ante ti una colérica hidra",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Con esfuerzo y paciencia consigues acabar con ella",
        puntos_si_gana: 110,
        resultado_si_mal: "La hidra es dura de pelar, solo consigues que tus heridas sean mayores",
        menos_vida_si_mal: 80
    },
    {
        texto: "Te adentras por un campo estéril y oscuro y te encuentras una manada de lobos",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Te las apañas para educar a esa manada, ahora eres uno más. ¡Eres un crack!",
        puntos_si_gana: 50,
        resultado_si_mal: "Huyes campo a través y te llevas contigo ramas, hojas y espinas secas. Esas heridas te escocerán",
        menos_vida_si_mal: 25
    },
    {
        texto: "Te encuentras en una gran explanada verde donde crees tener un poco de paz, tras de ti se levanta un titán dormido durante eones",
        minimo_dado: getRandomInt(1, 12),
        resultado_si_bien: "Luchas como todo un guerrero feroz y enredas las piernas del titán; haciéndolo caer y clavándose su propia arma",
        puntos_si_gana: 200,
        resultado_si_mal: "Persiguiéndote el titán tropieza y cae hacia delante, cayendo encima de ti. ¡Pero que mala pata!",
        menos_vida_si_mal: 99
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
    var newCharacter = prompt(`¿Qué quieres ser en tu viaje? ¿${characters}?\n\nPuntuación Máxima: ${maxScore.name} ${maxScore.points}`);
    if (characters.indexOf(newCharacter) >= 0) {
        player.type = newCharacter;
        player.name = prompt(`¿Cuál es tu nombre ${newCharacter}?`);

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
    alert(`Nivel: ${stage.level}\nTu Vida: ${player.health}\nPuntos: ${player.points}\n\n${stage.data.texto}\nNecesitas un ${stage.data.minimo_dado} para ganar\n\nTIRA EL DADO`);
    let numero = getRandomInt(1, 12);
    if (numero >= stage.data.minimo_dado) {
        alert(`Has Sacado un ${numero} y ${stage.data.resultado_si_bien}\nGanas ${stage.data.puntos_si_gana} puntos\n\nVida: ${player.health} Puntos: ${parseInt(player.points) + parseInt(stage.data.puntos_si_gana)}`);
        return win;
    } else {
        win = false;
        alert(`Has Sacado un ${numero} y ${stage.data.resultado_si_mal}\nPierdes ${stage.data.menos_vida_si_mal} de vida\n\nVida: ${player.health - parseInt(stage.data.menos_vida_si_mal)} Puntos: ${player.points}`);
        return win;
    }
}

function results(player, state) {
    var maxScore = cargarPuntuacionMax();
    if (maxScore.points < player.points || maxScore.name == null) {
        nuevaPuntuacionMax(player)
        maxScore = cargarPuntuacionMax()
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

maxScore = cargarPuntuacionMax();
newPlayer(player);
newStory(currentStages);
currentStages.forEach(stage => {
    if (player.health <= 0) {
        results(player, "YOU LOSE");
    } else {
        if (newStage(stage, player) == false) {
            player.health = player.health - stage.data.menos_vida_si_mal;
        } else {
            player.points = player.points + stage.data.puntos_si_gana;
        }
    }
});

if (player.health > 0) results(player, "YOU WIN");