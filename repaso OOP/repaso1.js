class Rectangulo{
    constructor(largo, alto){
        this.largo = largo
        this.alto = alto
    }
    
    obtenerPerimetro(){
        return 2*(this.largo+this.alto)
    }

    obtenerAreaDeLaRegion(){
        return this.largo*this.alto
    }
}

const Rectangle1 = new Rectangulo(4,5)
const Rectangle2  = new Rectangulo(3,7)

console.table(Rectangle1)
console.table(Rectangle2)
console.log(
    "Area region rectangulo 1",
    Rectangle1.obtenerAreaDeLaRegion()
    )


class Cuadrado extends Rectangulo{
    constructor(medidaLado){
        super(medidaLado,medidaLado)
    }
}
const cuadrado1 = new Cuadrado(9)

console.table(cuadrado1)
console.log(cuadrado1.obtenerPerimetro())