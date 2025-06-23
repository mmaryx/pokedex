import axios from 'axios';

export async function getPokemons() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    return response.data.results;
}

export async function getPokemonTypes(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const types = response.data.types.map(t => t.type.name);
    return types;
}