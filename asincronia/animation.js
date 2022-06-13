import { pikachu1, pikachu2 } from "./assets/pikachu.js"

let comuter = false 
setInterval(()=>{
    console.clear()
    console.log(comuter? pikachu1:pikachu2)
    comuter=!comuter
},500)