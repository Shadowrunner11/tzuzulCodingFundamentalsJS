/* //forma declarativa
function elNombreDeLaFuncion (parametro1, parametro2, parametro3){
    console.log(parametro1, parametro2, parametro3)
}
//call iteslf
elNombreDeLaFuncion()

elNombreDeLaFuncion("hola", " mundo", 3)
elNombreDeLaFuncion("Adios", " mundo", " todo esta caro")

//otra forma
const otraFuncion = function (parametro1, parametro2){
    console.log(parametro1, parametro2)
}

otraFuncion()
otraFuncion("hola ", "mundo")

//arrow function */
const arrowFunction = (parametro1, parametro2)=>{
    console.log(parametro1, parametro2)
}

arrowFunction()