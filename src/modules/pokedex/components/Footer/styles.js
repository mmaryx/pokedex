import styled from 'styled-components';
import { typeColors } from '@/utils/type.styles';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    justify-content: flex-start;
    position: relative;
`

export const Type = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    align-items: start;
`

export const Button = styled.button`
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 15px 4px 15px;
    background-color: var(--elements-color);
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    border-radius: 15px;
    border: none;
`

export const Image = styled.div`
    background-color: var(--elements-color);
    width: 110px;
    height: 110px;
    border-radius: 100px;
    position: absolute;
    top: 1px; 
    right: -25px;
`

export const Image2 = styled.div`
    background-color: ${({ type }) => typeColors[type]};
    width: 30px;
    height: 30px;
    border-radius: 50px;
    position: absolute;
    top: 43px; 
    right: 39px;
`

export const Image3 = styled.div`
    background-color: ${({ type }) => typeColors[type]};
    width: 105px;
    height: 8px;
    position: absolute;
    top: 54px; 
    right: 89x;
`