miFuncion("Hola ", "mundo", " el diablo es puerco", "otro parametro")


function miFuncion (param1,param2,param3){
    console.log(param1,param2,param3)
} 

const miFuncion2 = function (param1,param2,param3){
    console.log(param1,param2,param3)
}

miFuncion2(1,3,"lala")

const miFuncion3 = (param1,param2,param3)=>{
    console.log(param1,param2,param3)
}
