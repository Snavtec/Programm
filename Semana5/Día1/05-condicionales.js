let edad = +prompt("Cuál es tu edad?");

//if(condition)
//condicionales trabajan con booleanos, true y false
if(edad >= 18){
    console.log("si accedes a la 1ra dosis");
    } else if (edad >= 0) {
        console.log("Noup, tienes que esperar");
    } else {
        console.log("Error al ingresas los datos");    
} 

if(edad >= 60){
    console.log("Te toca Pfizer y te toca yaaaah!");
    // Y = && ambos tienen que ser verdura
} else if(edad <= 55 && 45) {
    console.log("Te toca Pfizer y finde");
    // O = ||
} else if (edad == 18 || edad == 21 ) {

    console.log("Te toca Sinopharm mañana");
    
} else {
    
    console.log("Anda a yopongoelhombro.com");
}
