Promise.race([
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(res=>res.json()),
    fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
    .then(res=>res.json()),
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then(res=>res.json())

]).then(data=>console.log(data.name))

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(res=>res.json()),
    fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
    .then(res=>res.json()),
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then(res=>res.json())

]).then(([{name: name1},{name: name2}, {name: name3}])=>console.log([name1,name2,name3]))




    