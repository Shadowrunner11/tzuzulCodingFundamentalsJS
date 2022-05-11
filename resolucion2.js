//Encriptar una cadena de texto teniendo en cuenta lo siguiente para reemplazar
// a: ai
// e: enter
// i: imes
// o: ober
// u: ufat

const CLAVES = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
}

const STRING_PRUEBA = prompt("Ingrese el string a cifrar\n")
let newString = ""

//null ?? valor2 -> valor2
//valor1 ?? valor2 ->valor1
//null safety

//50 consonantes -> 50 pasos

// for (const iterator of object) {
//     const RESULT = CLAVES[char]
//    /*  if (RESULT) {
//         newString+=RESULT
//     } else {
//         newString+=char
//     }
//  */
//     //ternary operator
//     //condition? lo que pasaria si true : lo que pasaria si false
//     newString+=RESULT? RESULT:char
// }

for (const char of STRING_PRUEBA) {
    newString+=CLAVES[char] ?? char
}

console.log(newString)



