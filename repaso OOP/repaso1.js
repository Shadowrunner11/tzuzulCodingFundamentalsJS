class Rectangle{

    constructor(widht, heigth){
        this.widht = widht
        this.heigth = heigth
    }

    
    getPerimeter(){
        return 2*(this.heigth+this.widht)
    }
    getAreaOfRegion(){
        return this.widht*this.heigth
    }
}

class Square extends Rectangle{
    constructor(lenght){
        super(lenght,lenght)
    }
} 

const MiCuadradito = new Square(9)
const MiCuadradito2 = new Square(10)


