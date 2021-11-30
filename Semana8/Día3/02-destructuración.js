let frutas = ["Piña", "fresa", "naranja", "kiwi"];

console.log(frutas[2]);
console.log(frutas[3]);

let fruta1 = frutas[0];
let fruta2 = frutas[1];

let [fru1, fru2, fru3, fru4] = frutas;

//console.log(fru4);
//console.log(fru2);
//console.log(fru1);

//destructuración de objetos
let celular = {
    pantalla:6.9,
    color: "negro",
    memoria: 4,
    camara: 12,
    marca: "motorola",
    encender: function () {
        console.log("tururu");
    },
};

let { pantalla, encender, marca, memoria, color, camara }  = celular;

console.log(pantalla);
encender();
console.log(color);
console.log(marca);

//que tenga una función que recibe las carácteristicas de otras personas

//let verificaPersona("Juan", "90890809", 25);

let verificaPersona = ({ nombre, dni, edad }) => {
    console.log(nombre);
    console.log(dni);
    console.log(edad);

};

let persona = {
    edad: 21,
    nombre: "Maria",
    dni: "234567890",
    apellidos: "Glavez",
    hobbies: ["comer", "correr"],


};

verificarPersona(persona);