fetch("https://reqres.in/api/users?page=2")
then((respuesta) => {
    console.log(respuesta);
    return respuesta.json() //parsea de texto a JS
}).then((gatos) => {
    console.log(gatos);
   // console.table(gatos.data); 
});

//POST - Crear
let nuevoUsuario = {
    name: "Daniel de la Cruz",
    job: "BOSS"
}

//headers - cabeceras - guía de remisión
let cabeceras = {
    method = "POST", //HTTP, POST, PUT, DELETE, GET
    header:{ //Que info anulo, de que tipo, para que el backen sepa como procesario
        'Content-Type':'application/json'
    },
    body:JSON.stringify(nuevoUsuario), //data, carga, pero hay que transformarlo en JSON
};

fetch("http://reqres.in/api/users", cabecera)
.then((respuesta) => {
    console.log(usuarioCreado);
})
.then((usuarioCreado) => {
    console.table(usuarioCreado);
})
.catch()
