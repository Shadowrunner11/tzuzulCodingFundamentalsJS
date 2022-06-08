import CustomText from "../../text.js"


class Bar {

    constructor(name,total, actual){
        this.name = name
        this.total = total
        this.actual = actual
    }

    print(color){
        const stringBar = this.name+": "+"#".repeat(
            parseInt(this.actual*20/this.total)
            )
        new CustomText(stringBar, color).print()
       
    }
}

class LifeBar extends Bar{
    constructor(initialLife){
        super("Life",initialLife, initialLife)
    }
    printLife(){
        this.print(this.actual<=this.total/10? "red":"green")
    }
}

export {LifeBar}