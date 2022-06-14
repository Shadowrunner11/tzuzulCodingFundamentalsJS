function miPromesa(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{res(true)},5000)
    })
}


miPromesa()
    .then(( response ) => console.log(response))
    .catch(( error ) => console.log(error))

async function start(){
    await miPromesa()
    console.log("promesa resuelta")
}

start()
