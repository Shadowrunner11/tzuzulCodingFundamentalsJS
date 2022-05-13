//diferencias entre namedFunction y arrowFunction
function namedFunction (param){
    return "El parametro de esta named funcion es"+param
}

const arrowFunction = param => "El parametro de esta arrow function es"+param

console.log(namedFunction("hola"))

console.log(arrowFunction("mundo"))

function potencia(base,exponente){
    return base**exponente
}

let suma = 0

function noPura(){
    suma = 8
}



