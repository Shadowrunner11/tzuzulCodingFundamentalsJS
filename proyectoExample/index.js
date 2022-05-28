import { 
    throwDice, 
    throwDice12, 
    throwDice6 
} from "./functions/dice.js";

let guardian = 0
const a =  setInterval(() => {
    guardian ++
    const randomDiceNumber  = throwDice12()
    console.log(randomDiceNumber)
    if(guardian===10) clearInterval(a)
}, 1000);