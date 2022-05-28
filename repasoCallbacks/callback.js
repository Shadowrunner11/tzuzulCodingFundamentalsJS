function printHelloWorld(){
    console.log("Hello world")
}

function printTodaisAGoodDay(){
    console.log("Today is a good day")
}

function midleware(callback){
    callback()
}

midleware(printHelloWorld)
