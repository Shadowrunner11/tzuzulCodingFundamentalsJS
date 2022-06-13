function promiseExecutor(resolve, reject){
    let cont  = 0
    const interval = setInterval(()=>{
        console.log("Esperando anillo", cont)
        cont++
        
        if(Math.random()>0.9){
            clearInterval(interval)
            resolve("propuesta")

        }
        if(cont===10){
            clearInterval(interval)
            reject("rechazado")

        }
    },500)
}

async function promiseStart(){
    try {
        await new Promise(promiseExecutor)
    } catch (error) {
        console.log(error)
    }
    console.log("a")
}

promiseStart()
    