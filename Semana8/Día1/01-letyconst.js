for(var i = 0; 1 < 5; i++) {
    console.log(i);
}
console.log(`iterador $(i)`);

for (let j = 0; j < 5; j++) {
    console.log(j);
}

// Console.log(`iteredor $(j)`);  //esto es error

//RESUMEN NO USEN VAR, AL MENOS UN LET

//Cuando son cons que tienen valores, se tiene la convención de poner el nombre en MAYÚSCULAS
const Pi = 3.1415;

// Pi = 40; //no podemos cambiar una variable creada con const

console.log("Mostrando Pi", Pi);

//Una variable puede referenciar casi cualquier cosa a una variable
//Variables como: number, booleans, arrays, objetos y funciones

let saludar = function () {
    console.log("Hola");
};

saludar();

const depedirme = function () {
    console.log("Chau");
};

despedirme();

//Si una variable que almacene lo que sea NO VA A CAMBIAR
//UTILICEN CONST