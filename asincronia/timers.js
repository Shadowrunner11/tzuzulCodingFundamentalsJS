// setTimeout

setTimeout(()=>{console.log("linea 1")},1000)
setTimeout(()=>{console.log("linea 2")},500)

console.log("linea 4")


/* setTimeout(
    (arg1, arg2)=>{console.log(arg1, arg2)},
    1000, 
    "Pollito con papas", "Pollito sin papas"
    ) */
/* let seconds = 0
let minutes = 0
const intervalId = setInterval(()=>{
    const secondsHandler = ()=>{ 
            minutes++
            return seconds=0
    }
    console.log(
        `${minutes<10? "0"+minutes: minutes}`,
        `${seconds===59? secondsHandler():++seconds}`)
}, 1000)

setTimeout(()=>{clearInterval(intervalId)}, 4000) */

/* let cont = 0
const intervalId = setInterval(()=>{
    console.log(cont++)
    console.log("intevalId",typeof intervalId,intervalId)
    if(cont===10)
        clearInterval(intervalId)
}, 1000)
 */


/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response=>response.json())
    .then(data=>console.log(data.abilities))
    .catch(error=>console.log(error))

console.log("a")
console.log("b")
console.log("c")
 */
