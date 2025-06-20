import Card from './components/Card';
import {
    Container,
    Content,
    Title,
} from './styles'

function PokeList() {
    return (
        <>
            <Container>
                <Title>Pokedex</Title>
                <Content>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Content>
            </Container>
        </>
    )
}

export default PokeList;