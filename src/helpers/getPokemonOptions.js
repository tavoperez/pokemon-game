import pokemonApi from "@/api/pokemonsApi";

const getPokemons = () =>{
    const pokemonsArr = Array.from(Array(649))
    
    return pokemonsArr.map(( _, index) => index + 1)
    
}

const getPokemonsOptions = async ()=>{
    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonsName(mixPokemons.splice(0, 4))

    return pokemons
}

const getPokemonsName = async ([a, b, c, d] = []) =>{

    const promisesArr= [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    const [p1, p2, p3, p4] = await Promise.all(promisesArr)

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]
    
    
    
}

export default getPokemonsOptions