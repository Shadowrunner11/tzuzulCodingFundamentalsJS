/* function miPromesa(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promesa resuelta")
        },5000)
    }).then( (response) =>console.log(response))
}
 */



/* async function start(){
    await new Promise((res)=>{
        let cont = 1
        const intervalId = setInterval(()=>{
            console.clear()
            console.log(".".repeat(cont))
            cont++
            if(cont===10){
                clearInterval(intervalId)
                res(true)
            }
        },1000)
    })

    console.log("Menu de incio")
}

start() */

async function oldMachineType(arrayS){
    for (const string of arrayS) {
        
        await new Promise((res)=>{
            let cont  = 1
            const intervalId = setInterval(()=>{
                console.clear()
                console.log("%c"+string.slice( 0 ,cont), "color:red")
                if(cont===string.length){
                    clearInterval(intervalId)
                    setTimeout(()=>{res(true)},3000)
                }
                cont++
            },150)
        })
    }

}

oldMachineType(
    [
        "It was then that I opened the notebook my mother had given me...she said she\n"+
        "found it while cleaning out the closet. Crumbling and covered with dust, it\n"+
        "turned out to be the diary of my long-lost grandfather.",
        "Do you still remember...?"
    ]
)