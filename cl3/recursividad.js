//crear una funcion que multiplique dos factores usando la adicion
//5*3 =3+3+3+3+3

function multiplicacion(factor1, factor2){
    let producto = 0
    for (let veces = 1; veces <=factor1 ; veces++) {
        producto+=factor2  
    }
    return producto
}

//cuando se ve mas bonito
//busqueda binaria
function multiplicacionRecursiva(factor1, factor2){
    if(factor1===0){
        return 0
    }
    if(factor1===1){
        return factor2
    }
    return factor2 + multiplicacionRecursiva(factor1-1,factor2 )
}

console.log(multiplicacionRecursiva(0,14))
//factorial recursivo
//factorial (5) = 5x4x3x2x1