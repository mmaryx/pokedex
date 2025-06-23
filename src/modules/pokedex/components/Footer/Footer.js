import React, { useState, useEffect } from 'react'

import {
    Container,
    Button,
    Type,
    Image,
    Image2,
    Image3,
} from './styles'

import { getPokemonTypes } from '@/service/pokedex'

function Footer({ pokemonName }) {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        if (!pokemonName) return;
        async function fetchData() {
            const data = await getPokemonTypes(pokemonName);
            setTypes(data);
        }

        fetchData();
    }, [pokemonName]);

    return (
        <>
            <Container>
                <Type>
                    {types.map((type) => (
                        <Button key={type}>{type}</Button>
                    ))}
                </Type>
                <Image>
                    <Image2></Image2>
                    <Image3></Image3>
                </Image>
            </Container>
        </>
    )
}

export default Footer;