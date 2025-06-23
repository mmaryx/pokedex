import styled from 'styled-components';
import { Image2, Image3 } from '@/modules/pokedex/components/Footer/styles'
import { typeColors } from '@/utils/type.styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 25px 20px 0px 20px;
    width: 210px;
    height: 150px;
    background-color: ${({ type }) => typeColors[type] || 'var(--card-color)'};
    border-radius: 20px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);

        ${Image2}, ${Image3} {
            transition: background-color 0.5s ease;
            background-color: var(--pokebola);
        }
    }
`
export const PokemonName = styled.div`
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 12px;
`