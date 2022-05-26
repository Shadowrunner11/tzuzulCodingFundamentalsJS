/* //Iniciliazacion con un literal entero
var miVariable = 13
//0 1 2 3 4 5 6 7 8 9 a b c d e f 
// f3= 15x16+3= 240+3 = 243
var miVariableHexadecimal =  0xf3
//0 1
var miVariableBinaria = 0b101011
//notacion cientifica
//3000000000000000
var miVariableMuyGrande = 3e15

console.log(miVariable)
console.log(miVariableHexadecimal)
console.log(miVariableBinaria)
console.log(miVariableMuyGrande)

//Inicilizacion con un literal flotante
var floatNumber = 2.3

var floatNumber2 = .3 //0.3

//0.00003
var floatNumber3 = 3e-5

console.log(floatNumber)
console.log(floatNumber2)
console.log(floatNumber3)

var millon = 1_000_000

//Saca la parte entera inmediata inferior
//2-----2.6---3
console.log(Math.floor(2.6))

//Redondear, aproximar
//2-----2.6---3
console.log(Math.round(2.6))

//Saca la parte entera inmedita superior
//2--2.1-------3
console.log(Math.ceil(2.1)) */
let cont = 0
let criticalRate = 99
const a = setInterval(()=>{
    console.log(Math.round(Math.random()*(100-criticalRate))+criticalRate)
    cont++
    if(cont===20)clearInterval(a)
},1000)
//Tarea: Investigar porque suceden los errores de redondeo y precision en JS

