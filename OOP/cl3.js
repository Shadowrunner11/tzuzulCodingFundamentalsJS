const gato = {
    name: "Michi",
    breeth:"Angora",
    color:"Amarillo",
    scratch: function (){
        console.log("El gato ha arañado")
        return this
    },//function (){console.log("El gato ha arañado")}
    walk: function (steps){
        console.log(`El gato ha avanzando ${steps} pasos`);
        return this
    },
    fly: ()=>{console.log("El gato voladooooooor")}
}

console.table(gato)
console.log(gato.name)


gato
    .scratch()
    .walk(6)
    .fly()


const weirdObject = {
    weirdProperty:"a",
    "weird property":"b",
    for:"forProperty"
}

console.log(weirdObject["weird property"])
console.log(weirdObject.for)



const object  = Object.create(null)
//Object.freeze(object)
console.log(object)
object.atribute1 = "1"
console.table(object)

const object2 = new Object()
console.log(object2)

console.log("el prototype primario es",Object.prototype) 

const miArray  = new Array()
console.log(miArray)
console.log(Array.__proto__)


