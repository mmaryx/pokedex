import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import {
    Container,
    PokemonName,
} from './styles';

import { getPokemons, getPokemonTypes } from '@/service/pokedex';

function Card() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const basicList = await getPokemons(); // lista com name e url

            const enriched = await Promise.all(
                basicList.map(async (pokemon) => {
                    const types = await getPokemonTypes(pokemon.name);
                    return {
                        name: pokemon.name,
                        types,
                    };
                })
            );

            setPokemons(enriched);
        }

        fetchData();
    }, []);

    return (
        <>
            {pokemons.map((pokemon) => (
                <Container type={pokemon.types[0]} key={pokemon.name}>
                    <PokemonName>{pokemon.name}</PokemonName>
                    <Footer pokemonName={pokemon.name} />
                </Container>
            ))}
        </>
    );
}

export default Card;
