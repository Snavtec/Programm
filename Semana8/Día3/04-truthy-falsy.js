//comparaciones con JS
// == vs ===
// == solamente el valor
// === compara el valor y el tipo de dato
if (i === "i") {
    console.log("son iguales");
} else {     
    console.log("no son iguales");

}

//---------------------------------
//truthy - falsy
//falsy
// Let meQuiere = undefined;
// Let meQuiere = 0;
// Let meQuiere = "";
// Let meQuiere = nul;

//truthy
// Let meQuiere = "regalo";
// Let meQuiere = 98989898098;
let meQuiere = {
    tipo: "regalo",
    categoria: "peluche",
};

if (meQuiere) {
    console.log("claaaaaro");
} else {
    console.log(" T_T ");     
}