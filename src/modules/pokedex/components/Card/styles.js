import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 0px 20px 0px 20px;
    width: 210px;
    height: 150px;
    background-color: var(--card-color);
    border-radius: 20px;
`
export const PokemonName = styled.div `
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 12px;
`