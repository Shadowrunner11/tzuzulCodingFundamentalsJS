/* new Promise( resolve =>{
    setTimeout(()=>{resolve("resultado final")}, 2000)
}).then(resultado => console.log(resultado))

console.log("codigo no bloqueado")
 */

async function start(){
    await new Promise( resolve =>{
        console.log("cuerpo de la promesa")
        setTimeout(()=>{
            resolve("resultado final")
        }, 2000)
    })

    console.log("codigo bloqueado")
}

start()