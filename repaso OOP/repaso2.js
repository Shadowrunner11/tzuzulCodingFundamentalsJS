const myObject  = {
    propiedad1: "valor1"
}
/* 
console.table(myObject)
console.log(myObject.propiedad1)
console.log(myObject['propiedad1']) */

class Perro{
    constructor(name){
        this.name  = name
    }
}

const Pluto = new Perro("Pluto")
console.log(Pluto.name)
console.table(Pluto)

Pluto.name = "Kripto"

console.table(Pluto)