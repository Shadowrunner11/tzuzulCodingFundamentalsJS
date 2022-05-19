//crear una funcion que nos permita multiplicar dos numeros naturales
//5*3 = 3+3+3+3+3
//4*5 = 5+5+5+5 

function multiplicacion(factor1, factor2){
    let producto = 0
    for (let veces = 1; veces <= factor1; veces++) {
        producto+=factor2
    }
    return producto
}

function multiplicacionRecursiva(factor1, factor2){
    if(factor1===1) {
        return factor2
    }
    return factor2+multiplicacionRecursiva(factor1-1,factor2)
}

console.log(multiplicacionRecursiva(98,97))