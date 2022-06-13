let myObject  = undefined

//optional chaining
console.log(myObject?.propiedadRara)
console.log("continua")

if(myObject!==undefined && myObject!==null){
    return myObject.propiedadRara
}else{
    return undefined
}