import initialScrenn from "./artePokemons/initialScreen.js"
import { charmander, pikachu } from "./models/base/base.js"
import CustomText from "./text.js"

class Menu{
    
    constructor(initialMessage,options){
        this.initialMessage = initialMessage
        this.options = options
    }
    
    showOptions(){
        new CustomText(this.initialMessage).print()
        for (let index = 0; index < this.options.length; index++) {
           new CustomText(
               `${index+1}.- ${this.options[index]}`,
               "#9a99ff"
               ).print()
        }
    }
    
    getUserInput(){
        let userInput = prompt("->")
        while(true){
            if(this.#validateInput(userInput)) return userInput-1
            userInput = prompt("No es una respuesta valida, intentelo de nuevo")
        }
    }

    #validateInput(input){
        return Boolean(Number(input))
    }
}

function init (){
    const menuInicio  = new Menu(
        initialScrenn,
        ["Iniciar juego","Configuracion","Password", "Cargar juego"]
    )
    menuInicio.showOptions()
    const userInput  = menuInicio.getUserInput()
    if(userInput===1){
        const configMenu = new Menu("Configuracion",["Color de texto", "Cambiar nombre", "Volver"])
        configMenu.showOptions()
        if(configMenu.getUserInput()===2){
            init()
        }
    }
}


const data  =  JSON.stringify({pikachu, charmander})
const inGameMenu = new Menu("Prueba in game menu",['save'])
inGameMenu.showOptions()

if(inGameMenu.getUserInput()===0)
    Deno.writeTextFileSync("./config/save1.json", data)

