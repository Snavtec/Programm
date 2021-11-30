//Objetos Date nos sirve para manejar fichas
let hoy = new Date();
//Clases (class), plano, diseño, molde
//Cuando invocamos una clase utilizamos la palabra new

//TIMESTAMP: Es una referencia que tienen todas las bases de datos y es una referencia que se da
//            a la base de tiempo. Cantidad en milisegundos desde 1970/01/01.

//Tiempo UNIX ---> buscar
//FIREBASE ------> BUSCAR

console.log(hoy);
console.log(typeof hoy);

//Obtenga el año
console.log(hoy.getFullYear());

//Mes, Enero es 0 y Diciembre 11
console.log(hoy.getMonth());

//Día
console.log(hoy.getDate());

let navidad = new Date(2021, 11, 25);

console.log(navidad);
//getTime() me devuelve el timestamp de navidad
console.log(navidad.getTime());

let hastaNavidad = navidad - hoy;

console.log(hastanavidad);

let diasParaNavidad = hastaNavidad / 1000 / 60 / 60 / 24;

console.log(diasParaNavidad.toFixed(2));

console.log(navidad.toDateString());

//Math
//Raíz cuadrada
