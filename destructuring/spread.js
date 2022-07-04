const compras ={
    almuerzo:"cebolla",
    cena:"fruta",
    desayuno: "pan"
}

console.log({refrigerio:"doritos", compras })

console.log({refrigerio:"doritos", ...compras })

console.log(Object.keys(compras))

console.log(Object.values(compras))