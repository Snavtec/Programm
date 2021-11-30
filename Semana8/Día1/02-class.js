//class => molde, plano, fábrica
class pokemon {
    //características que tiene este plano
    Nombre;
    Tipo;
    Defensa;
    PuntosVida;

    //métodos, directamente por su nombre
    //Y TODA LA CLASE va a tener un método constructor
    //este constructor se ejecuta automaticamente al momento de llamar a la clase
    constructor(nombre, tipo, ataque, defensa, puntosvida) {
        //se va a encargar de construir objeto      
        //this, hace referencia a si mismo
        this.Nombre = nombre;
        this.Tipo = tipo;
        this.Ataque = ataque;
        this.Defensa = defensa;
        this.PuntosVida = puntosvida;
        //1ro se contruye
        //2do ejecuta lo que le ponga después
        this.aparecer();
    }

    aparecer() {
        console.log(`Un ${this.Nombre} salvaje apareció`); 
    }

    atacar() {
        console.log(`${this.Nombre} ataca con ${this.Ataque}`);
    }
}
//instancia

let pokemon1 = new Pokemon("Pikachu", "Eléctrico", 30, 20, 60);

let pokemon2 = new Pokemon("Dragonite", "Dragón", 70, 80, 120);

console.log(pokemon1, Tipo);
console.log(pokemon2.atacar());
// console.log(pokemon2.aparecer());