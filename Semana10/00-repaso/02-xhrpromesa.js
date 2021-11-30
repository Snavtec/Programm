let hacerPetición = () => {
    return new Promise((resolve, reject) => {
        let asistente = new XMLHttpRequest();
        asistente.addEventListener("readystatechange", () => {
        if(asistente, readyState === 4) {
            //ya tengo la rpta
            resolve(asistente, responseText);
        }
    });
    
        asistente.open("GET", "https://swapi.dev/api/people/1"); //pon el dest. y la forma de envío
        asistente.send(); //envía la carta
    });
};

//let mifunción = hacerPeticion();

//console.log(mifunción)

//hacerPetición().then((rptaTexto) => {
  //  console.log("rptaTexto", rptaTexto)
   // console.log("convertido", JSON.parte(rptaText));
//});

const pedirData = async () => { 
    //asincrono, por el async
    try {
      let rpta = await hacerPetición();
      console.log(JSON.parse(rpta));
    } catch (error) {
        console.log(error);
    }
};

pedirData();