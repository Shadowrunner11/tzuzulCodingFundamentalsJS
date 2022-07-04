const arraySample = [1,2,3,4,5,7,10]

// filter

const arrayFiltered = arraySample.filter((element)=>element%2 === 0)

console.log(arrayFiltered)

// find

const five = arraySample.find((element)=>element===5)

console.log(five)

// cuando no encuentra el elemento nos devuelve undefined
console.log(arraySample.find(element => element === 11))

const indexOfFive =  arraySample.findIndex(element => element === 5)
console.log(indexOfFive)

const indexOf4 = arraySample.indexOf(4)
console.log(indexOf4)

const mappedAray =  arraySample.map((element)=>element*2)
console.log(mappedAray)

const reducedArray = arraySample.reduce((prev, next)=>prev+next)
console.log(reducedArray)

const reducedArray2 =  arraySample.reduce((prev, next)=>prev+next, 10)
console.log(reducedArray2)

const text = ["mi", "perrito", "es", "grande"].reduce((prev, next)=>prev+" "+next)

console.log(text);

console.log(["mi", "perrito", "es", "grande"].join(" "))

// declartiva vs imperativo


const nestedArray  = [[1,2], [3,4,5]]

const flatedArray  = nestedArray.flat()
console.log(flatedArray)