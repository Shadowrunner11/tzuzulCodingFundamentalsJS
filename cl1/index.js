/* for (let index = 0; index < 10; index++) {
    console.log(index)
}

var contador = 0
while(contador<10){
    console.log(contador++)
  
} */

/* console.log(contador)


for (let index = 0; index < stringCustom.length; index++) {
    console.log(stringCustom[index])
    
}
*/
const stringCustom = "Tzuzul code es el mejor campamento de coding fundamentals"

let iterador = stringCustom[Symbol.iterator]()
let theChar = iterador.next()
while(!theChar.done){
    console.log(theChar.value);
    theChar = iterador.next();
}

