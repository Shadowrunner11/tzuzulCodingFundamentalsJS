//Encriptar una cadena de texto teniendo en cuenta lo siguiente para reemplazar
// a: ai
// e: enter
// i: imes
// o: ober
// u: ufat
const STRING_PRUEBA = prompt("Ingrese un string\n")
let newString = ""
//50 constantes -> 50*6=300 pasos
for (let index = 0; index < STRING_PRUEBA.length; index++) {
    const CHAR = STRING_PRUEBA[index]
    switch (CHAR) {
        case "a":
            newString+="ai"//newString = newString + "ai" 
            break;
        case "e":
            newString+="enter"
            break;
        case "i":
            newString+="imes"
            break;
        case "o":
            newString+="ober"
            break
        case "u":
            newString+="ufat"
            break
        default:
            newString+=CHAR
            break;
    }
    
}

console.log(newString)