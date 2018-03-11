var nombre = prompt("Introduce caracteres");
var numero = parseInt(prompt("Introduce un Número Entero"));
var longitudNombre = nombre.length;
var texto = "";


for (let i = 0; i < longitudNombre; i++) {
    var letraAscii = nombre.charCodeAt(i) + numero;
    texto += String.fromCharCode(letraAscii);
}
console.log(`Caracteres Iniciales: ${nombre} `);
console.log(`Caracteres Finales: ${texto}`);