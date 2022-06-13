Promise.any(
    [
        new Promise(res=>{
            setTimeout(()=>{
                res("gano1")
            },Math.trunc(Math.random()*5000))
        }),
        new Promise(res=>{
            setTimeout(()=>{
                res("gano2")
            },Math.trunc(Math.random()*5000))
        })
    ]
).then(result=>console.log(result))