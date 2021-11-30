let frutas = ["Fresa", "Mango", "Piña", "Lucuma"];

//for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

//recuerden los arreglos también son objetos
//forEach(function()());
frutas.forEach(function(fru) {
    console.log(fru);
});

//forEach por cada elemento que encuentre vas a ejecutar
//una función, y cada vez que se ejecute esa función vas a recibir
//cada item en orden y este item podemos utilizar dentro de la función.

//Filter
let conductores = [
    {
        nombre: "José",
        vacunado: true,
    },
    {
        nombre: "Glenda",
        vacunado: true,
    },
    {
        nombre: "Osmar",
        vacunado: false,
    },
];

let puedePasar = conductores.filter(function (driver) {
    return driver.vacunado == true;
});

console.log(puedePasar);

let dni = ["42144143", "12345678", "76543210"];
