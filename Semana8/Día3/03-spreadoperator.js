let frutas = ["kiwi", "Sandía", "Fresa", "Chirimoya"];

//un nuevo arreglo pero con el contenido de otro...arreglo
let frutasTmp = [...frutas, "Mango", "Uvas"];

console.log(frutasTmp);

let verduras = ["Lechuga", "Col China", "Zanahoria"];

let comida = [...frutas, ...verduras];

// console.log("comida", comida);

//spread operator en objetos

let Pikachu = {
    tipo: "Eléctrico",
    ataque: 40,
    vida: 55,
    ataque: "Cabezaso",
};
// no hagan esto
// let PikachuRojo = Pikachu;

//PikachuRojo se peleó
//PikachuRojo.Vida = 23;
//console.table(PikachuRojo);
//