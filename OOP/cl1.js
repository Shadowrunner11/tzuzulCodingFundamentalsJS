class Perro{
    constructor(nombreAsignado){
        this.nombre = nombreAsignado ?? "Boby"
    }

    ladrar(){
        if(this.nombre=="Rocky"){console.log("Te toco el perro de la suerte")}
        console.log(`El perrito ${this.nombre} dice guau`)
    }

    morder(persona){
        console.log(`El perrito ${this.nombre} esta mordiendo ${persona.nombre}`)
    }
}

const Rocky = new Perro("Rocky")
const Boby = new Perro("Boby")

const Juan = {nombre:"Juan"}

Rocky.morder(Juan)
Boby.morder(Juan)

Rocky.ladrar()