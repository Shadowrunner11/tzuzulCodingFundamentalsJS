const arraySample = [1,2,3,4,5,6,0,7]

const arrayFiltered = arraySample.filter((element=> element%2===0))
console.log(arrayFiltered)


const mappedArray = arraySample.map((element)=>element*2)
console.log(mappedArray)

const dobledEven = arraySample
                    .filter(element => element%2 ===0)
                    .map(element=>element*2)
console.log(dobledEven)

const finded = arraySample.find(element=>element===5)
console.log(finded)

const notfinded = arraySample.find(element=>element==="")
console.log(notfinded)

arraySample.forEach((element, index)=>{
    if(index>2){
        console.log(element)
    }
})

const toFlatArray = [
    [1,2],
    [3,4,5]
]

console.log(toFlatArray.flat())

// oneliners
// especial operators