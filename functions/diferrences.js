const functionNamespace = {
    arrowFunction:()=>{console.log("este es el this del arrow function",this)},
    anonimusFunction: function (){console.log("este es el this del function",this)},
    arrowInAnonimus: function (){
        const innerFunction = ()=>{console.table(this)}
        innerFunction()
    }
}

functionNamespace.arrowFunction()
functionNamespace.anonimusFunction()
functionNamespace.arrowInAnonimus()