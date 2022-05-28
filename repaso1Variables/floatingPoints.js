let x = .3 -.2 //->.1
let y = .2 -.1 //->.1

console.log(x===y)//->false
console.log("el valor de .3-.2 es",x)
console.log("el valor de .2-.1 es",y)

/* console.log(Number(.3).toString(2))
//0.100110011001100110011
console.log(Number(.3).toString(2))
//0.001100110011001100110

console.log(Number(.2).toString(2))

console.log(Number(.1).toString(2)) */

const xFixed = x.toFixed(2)
const yFixed = y.toFixed(2)

console.log("x fixed is", xFixed)
console.log("y fixed is", yFixed)

