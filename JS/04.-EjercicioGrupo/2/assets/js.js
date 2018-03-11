var pajaros = [1, 2, 3, 5, 5, 4, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4, 4, 4, 3, 4, 3, 5, 5, 2, 1];
var numeroPajaros = [];

// filter busca dentro de una funcion anónima que busca x condiciones

// Funcion Anónima (arrow function), si es de solo un parámetro se pueden quitar los paréntisis
// Y si es una sola linea se pueden quitar los {}

// pajaros.filter((pajaro)=> {
//     pajaro == 5;
// })
numeroPajaros.push(pajaros.filter(pajaro => pajaro == 1).length);
numeroPajaros.push(pajaros.filter(pajaro => pajaro == 2).length);
numeroPajaros.push(pajaros.filter(pajaro => pajaro == 3).length);
numeroPajaros.push(pajaros.filter(pajaro => pajaro == 4).length);
numeroPajaros.push(pajaros.filter(pajaro => pajaro == 5).length);

var largoPajaros = numeroPajaros.length;
var indicePajaros = 0;

console.log(numeroPajaros);
for (let i = 0; i < largoPajaros; i++) {
    var grupo = numeroPajaros[i];
    var max = numeroPajaros[0];
    if (max === grupo) {
        indicePajaros = i;
    } else if (max < grupo) {
        // var aux = max;
        numeroPajaros[0] = grupo;
        // var grupo = aux;
        indicePajaros = i;
    }
}

console.log(`El grupo mayoritario de pajaros es el: ${indicePajaros+1}`)