setTimeout(()=>{console.log("a")},0)

setTimeout(()=>{console.log("b")},100)

function a(){
    b()
}

function b(){
    c()
}

function c(){

}

a()
b()
