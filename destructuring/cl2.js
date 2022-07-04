/* let [desayuno, cena,, almuerzo] = [
    "cafe", 
    "fruta",
    "doritos",
    "arroz"
]

console.log(desayuno)

console.log(cena)

console.log(almuerzo)
 */

/* const {sala, comedor} = {
                        dormitorio  :"cama",
                        tocador     :"espejo",
                        comedor     :"mesa",
                        sala        :"tv"
                    }

console.log("lo que hay en la sala es "+sala," y en el comedor " + comedor)
 */

/* const {
    sala    : primerEspacio, 
    comedor : segundoEspacio
} = {
    dormitorio  :"cama",
    tocador     :"espejo",
    comedor     :"mesa",
    sala        :"tv"
    }
console.log(primerEspacio, segundoEspacio) */

/* function imprimirNombreYSalario(nombre, salario){
    console.log(nombre, salario)
}
 */
const persona = {
    nombre: "Pepito",
    salario: {
        desde: 300,
        hasta: 1000
    },
    apellido: "Smith"
}

/* imprimirNombreYSalario(persona.nombre, persona.salario.desde) */

function imprimirNombreYSalarioV2({
    nombre, 
    salario:{
        desde
    }
}){
    console.log("el nombre es " +nombre)
    console.log("el salario es "+ desde)
}

/* imprimirNombreYSalarioV2(persona) */

const pikachu = {
    id: 25,
    attacks:["hiperrayo", "hidrombomba","rayo hielo"]
} 
/* const id = pikachu.id
const atk1 =  pikachu.attacks[0]
 */
const {
    id, 
    attacks:[atk1]
} = pikachu

console.log(id, atk1)

/* let estado;

function useState(estadoIncial){
    estado = estadoIncial
    function setState(estadoNuevo){
        estado = estadoNuevo
    }

    return [estado, setState]
}

const [hora, setHora] = useState("asdas")
console.log(hora)
 */

const [{}, {}] = [{},{}]





