import Card from '@/modules/pokedex';
import { PokedexProvider } from '@/store/PokedexContext';

function Pokedex()  {
    return (
        <PokedexProvider>
            <Card />
        </PokedexProvider>
    )
}

export default Pokedex;
