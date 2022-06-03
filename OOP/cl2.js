//codigo repetitivo
/* class Charmander{
    constructor(name){
        this.name = name;
    }
}

class Squirtle{
    constructor(name){
        this.name = name
    }
} */

class Pokemon{
    constructor(name, gender, principalType, secondaryType, life, pp,atacks){
        this.name = name
        this.gender = gender
        this.principalType = principalType
        this.secondaryType= secondaryType
        this.life = life
        this.pp = pp
        this.atacks = atacks
    }


}

class Charmander extends Pokemon{
    constructor(name,gender){
        super(name,gender, "fuego",null,60, 60)
    }
}

class Squirtle extends Pokemon{
    constructor(name,gender){
        super(name, gender, "agua",null,90,50)
    }
}

class Bulbasur extends Pokemon{
    constructor(name,gender){
        super(name,gender, "hierba",null,100, 40)
    }
}
