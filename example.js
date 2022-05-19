let username = prompt("Ingrese su nombre")
let response; 
let condition = true

do {
    response = prompt(`Su nombre de usuario es ${username}, esta de acuerdo?[y/n]`)
                    .toLowerCase()
                    .trim()
    switch (response) {
        case "y":
            console.log("bienvenido "+username)
            condition =false
            break;
        case "n":
            username = prompt("Por favor ingrese correctamente su nombre")
            break;
        default:
            response = prompt("No es una respuesta validad, intentelo de nuevo")
            break;
    }
} while (condition);


