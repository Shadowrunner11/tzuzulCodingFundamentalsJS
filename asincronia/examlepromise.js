async function menu(){
    await new Promise(res=>{
        let cont = 1
        const interval = setInterval(()=>{
            console.clear()
            console.log(".".repeat(cont++))
        },500)
        setTimeout(()=>{
            clearInterval(interval)
            res(true)
        },5000)
    })
    console.log("Bienvenido al juego")
}

menu()