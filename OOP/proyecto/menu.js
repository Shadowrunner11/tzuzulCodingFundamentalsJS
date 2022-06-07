class Menu{
    constructor(initialMessage,options){
        this.initialMessage = initialMessage
        this.options = options
    }

    getUserInput(){
        console.log(this.initialMessage)
        for (let index = 0; index < this.options.length; index++) {
            console.log(`${index+1}.- ${this.options[index]}`)
        }
        let userInput = prompt(" ")
        while(true){
            if(this.#validateInput(userInput)) return userInput
            userInput = prompt("No es una respuesta valida, intentelo de nuevo")
        }
    }
    #validateInput(input){
        return Boolean(Number(input))
    }
}

const menuInicio  = new Menu("Bienvenidos a MATH AND MAGIC",["Iniciar juego","Configuracion","Password", "Cargar juego"])

const userInput  = menuInicio.getUserInput()
console.log(userInput)