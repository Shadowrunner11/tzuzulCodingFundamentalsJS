function getData(){
    return [
        Number(prompt("Ingrese la hora")),
        Number(prompt("Ingrese los minutos")),
        Number(prompt("Ingrese los segundos"))
    ]
}


function reloj(limitSeconds, limitMinutes, limitDay){
   let [hora, minutos, segundos] =  getData()
   
   const intervalId = setInterval(()=>{
    segundos++
    if(segundos===limitSeconds){
        segundos = 0
        minutos++
       }
    
    if(minutos===limitMinutes){
        minutos = 0
        hora ++ 
    }
    
    if(hora === limitDay)
        hora = 0
    
    console.log(
        `${hora<10 ? "0"+hora: hora} :`+
        `${minutos<10 ? "0"+minutos:minutos} :`+ 
        `${segundos<10 ? "0"+segundos: segundos}`)
   },1000)
 
   return intervalId

}
const intervalId  = reloj(10,10,10)
setTimeout(()=>{clearInterval(intervalId) },10000)

