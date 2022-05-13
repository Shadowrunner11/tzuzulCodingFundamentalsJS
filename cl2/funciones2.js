//Crear una calculadora con las 4 operaciones arimeticas basicas
//y que solo admita dos numeroas a la vez

const operacion = prompt("Ingrese una opcion\n1.adicion\n2.sustraccion\n")
const primerNumero = Number(prompt("Ingrese el primer numero"))
const segundoNumero = Number(prompt("Ingrese el segundo numero"))

switch (operacion) {
    //if(operacion==="1" || operacion===="adicion")
    case "1":
    case "adicion":
        console.log(adicion(primerNumero,segundoNumero))
        break;
    case "sustraccion":
    case "2":
        console.log(sustraccion(primerNumero,segundoNumero))
        break;
    default:
        break;
}

function adicion(sumando1, sumando2){
    return sumando1+sumando2
}

function sustraccion(minuendo, sustraendo){
    return minuendo-sustraendo
}

function multiplicacion(factor1, factor2){
    return factor1*factor2
}

function division(dividendo, divisor){
    return dividendo/divisor
}



//factorial(5) = 1x2x3x4x5