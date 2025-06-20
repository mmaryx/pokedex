import PokeList from '@/modules/pokedex';
import { PokedexProvider } from '@/store/PokedexContext';

function Pokedex()  {
    return (
        <PokedexProvider>
            <PokeList />
        </PokedexProvider>
    )
}

export default Pokedex;
