class Person{
    #name
    #birthday
    constructor(name, birthday){
        this.#name =  name
        this.#birthday = birthday//"MM-DD-YYY"
    }

    get age(){
        return Math.trunc((new Date().getTime() - new Date(this.#birthday).getTime())/3154e7)
    }
    get name(){
        return this.#name.toString()
    }

    set name(newName){
        if  (this.age>18 && !/\d|,|.|covid/.test(newName)){
           this.#name = newName
        }
        else
            throw new Error("No tienes la edad o el nombre es invalido")
    }

    printInfo(){
        console.table({name: this.#name})
    }
}

const Gabriel = new Person("Pandemio", "02-10-2000")
Gabriel.name = "Covid"
Gabriel.printInfo()