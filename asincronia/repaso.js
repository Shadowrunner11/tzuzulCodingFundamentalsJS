setTimeout(()=>{
    console.log("primer set timeout")
},2000)

setTimeout(()=>{
    console.log("segundo set timeout")
}, 1500)

console.log("console log en el espacio global")

setTimeout(()=>{
    console.log("tecer set timeout")
},1000)