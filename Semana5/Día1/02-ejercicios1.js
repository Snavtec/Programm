//1. Pedir el usuario sus nombres, apellido y edad cada uno por separado, el resultado debería ser un console.log, resumiendo los datos del usuario.

let nombres = prompt("Cuál es tu nombre?");

let apellidos = prompt("Cuál es tu apellido?");

let edad = prompt("Cuál es tu edad?");

console.log(`Bienvenid@: ${nombres} ${apellidos} de ${edad} años de edad`);

alert(`bienvenid@: ${nombres} ${apellidos} de ${edad} años de edad`);

let base = +prompt("Cuál es la base del triángulo")
let altura = +prompt("Cuál es la altura del triángulo");

console.log(typeof altura);

let baseNumero = parseFloat(base);
let alturaNumero = parseFloat(altura);

let resultado = (baseNumero * alturaNumero) / 2;

console.log(resultado);