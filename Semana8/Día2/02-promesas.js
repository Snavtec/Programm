//function hornearTorta() {
    const hornearTorta = () => {
    //no sabemos como ira el horneado de nuestra torta
    //y que eso demora en saber
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let estado = false;
                if(estado == true) {
                resolve("La torta esta Ready!");
                } else {
                    reject("Pos se quemo :( ");
            }
        }, 5000);
            
    });
};

hornearTorta().then((hornearTorta) => {
    console.log(tortaHorneada);
}).catch((tortaQuemada) => {
    console.log(tortaQuemada);
});

// hornearTorta()
//  .then(function (tortaHorneada) {
//       console.log(tortaHorneada);
//  })
//  .catch(function (tortaHorneada) {
//      console.log(tortaQuemada);
//  });    