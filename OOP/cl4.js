/* const object1 = Object.create({x:2,y:4})

console.log(object1)
console.log(object1.x) */


function Cat(name,color, breed){
    this.name = name;
    this.color = color;
    this.breed = breed
}

Cat.prototype = {
    fly:function(){console.log("El gato volador")},
}

const Tom = new Cat("Tom","Plomo","Acme")
console.table(Tom)
Tom.fly()

console.log(Tom instanceof Cat)

