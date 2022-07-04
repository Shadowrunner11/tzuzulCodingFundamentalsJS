const questionAnswer = [
    {
     key:1,
     pregunta: "¿Quién escribió La Odisea?",
     a:"Homero", 
     b:"Galileo",
     c:"Steven Spilberg",
     d:"Paulo Coello",
     correct :"a"   
    },
        
    {   
    key:2,
    pregunta: "¿Cómo se llama la capital de Mongolia?",
    a:"No tiene", 
    b:"Roma",
    c:"Marraquesh",
    d:"Ulan Bator",
    correct :"d"   
    }
 ]


const newArray = questionAnswer.map(
    ({a,b,c,d,correct})=>({a,b,c,d,correct})
)

console.log(newArray)

const [{a,b,c,d,correct} ] = questionAnswer

const question= Object.values(questionAnswer)[0]
