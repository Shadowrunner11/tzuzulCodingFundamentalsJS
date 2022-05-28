
export function throwDice(max,min){
    return Math.ceil(Math.random()*(max-min))+min
}

export function throwDice6(){
    return throwDice(6,1)
}

export function throwDice12(){
    return throwDice(12,1)
}