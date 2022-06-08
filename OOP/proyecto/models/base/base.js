import charmanderArt from "../../artePokemons/charmanderArt.js"
import pikachuArt from "../../artePokemons/pikachu.js"
import CustomText from "../../text.js"
import { LifeBar } from "./bars.js"
import Stats from "./stats.js"


class Pokemon{
    constructor(name, stats, LifeBar, sprite, color){
        this.name = name
        this.stats = stats
        this.LifeBar = LifeBar
        this.sprite =  sprite
        this.color = color
    }

    showPokemon(){
        new CustomText(this.sprite, this.color).print()
        console.table(this.stats)
        this.LifeBar.printLife()
    }
}



const pikachuLifeBar  = new LifeBar(100)
pikachuLifeBar.actual=20
const pikachu  = new Pokemon(
    "pollito",
    new Stats(10,10,10,10,10),
    pikachuLifeBar,
    pikachuArt,
    "yellow"
)

// pikachu.showPokemon()

const charmander = new Pokemon(
    "char char",
    new Stats(10,10,10,1),
    pikachuLifeBar,
    charmanderArt,
    "orange"
)

// charmander.showPokemon()

export{pikachu,charmander}