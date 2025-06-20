import Footer from '../Footer'
import { 
    Container,
    PokemonName,
} from './styles'

function Card() {
    return (
        <Container>
            <PokemonName>Pokémon</PokemonName>
            <Footer />
        </Container>
    )
}

export default Card;