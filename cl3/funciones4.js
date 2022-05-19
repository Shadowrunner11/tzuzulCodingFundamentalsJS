/* function funcion1(){
    function funcion2(){
        console.log("Soy una funcion anidada")
    }
    funcion2()
}

funcion1() */

//funcion2() no funciona porque funcion es local de funcion1

function outerFuncion(){

    return function innerFuncion(){
        console.log("Soy una funcion adentro de outer funcion")
    }
}

const innerFunction2 = outerFuncion()

innerFunction2()

//closure
//decorators




