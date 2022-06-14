// setTimeout
/* setTimeout(()=>{console.log("linea 2")},1000)
setTimeout(()=>{console.log("linea 3")},500)

console.log("linea 5") */

/* setTimeout(
    (arg1, arg2)=>{console.log(arg1*2, arg2)},
    1000, 
    5, "Pollito sin papas"
    ) */

//setInterval

/* const intervalId = setInterval(()=>{
    console.log("Levantarse")
}, 1000)

setTimeout(()=>{
    clearInterval(intervalId)
},4000) */

//reloj
/* let seconds = 0
let minutes = 0

const intervalId = setInterval(()=>{
    seconds++
    if(seconds===10){
        seconds=0
        minutes++
    }
    console.log(
        `${minutes<10 ? "0"+minutes:minutes}`+":"+
        `${seconds<10 ? "0"+seconds:seconds}`)
}, 1000)

setTimeout(()=>{clearInterval(intervalId)}, 24000)
 */
/* let cont = 0
const intervalId = setInterval(()=>{
    console.log(cont++)
    console.log("intevalId",typeof intervalId,intervalId)
    if(cont===10)
        clearInterval(intervalId)
}, 1000)
 */


fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response=>response.json())
    .then(data=>console.log(data.abilities))
    .catch(error=>console.log("Upps"))

console.log("a")
console.log("b")
console.log("c")
