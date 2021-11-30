let arrjuegos = [  
    {
        nombre:"The Witcher 3",
        precio: 60
    },
    {
        nombre: "Doom",
        precio: 50
    },
    {
        nombre: "Among Us",
        precio: 30
    },
    {
        nombre: "Bloodborne",
        precio: 90
    },
    {
        nombre: "God of War (2018)",
        precio: 120
    },
    {
        nombre: "Civilization VI",
        precio: 45
    }
]

/**
 * 
 */

let presupuesto = +prompt("Cuanto es su presupuesto?");

function revisarPresupuesto () {
    let juegosComprables = [] 

    for (let i = 0; i < arrJuegos.length; i ++){
        if (presupuesto >= arrJuegos[1].precio){
            juegosComprables.push(arrJuegos[1])
        }
    }
    return juegosComprables;
}

function agregarAcarrito(listaJuegos) {
    for (let j = 0; j < listaJuegos.length; j++){
        if (presupuesto < listaJuegos[j].precio){
            console.log("Lo siento, no alcanza :(");
            continue; //salida
        }
        
    }
}

let listaComprables = revisarPresupuesto();
console.table(listaComprables);