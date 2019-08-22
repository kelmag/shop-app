import styled from 'styled-components'
import { Pill } from 'components/kit/Button'

export const Img = styled.img`
    max-width: 80px;
`;

export const Button = styled(Pill)`
    padding: 13px 50px;
`;

export const Background = styled.div`
    position:fixed;
    background-color:rgba(0,0,0,.4);
    width:100%;
    z-index: 1;
    height:100%;
    max-width: 1440px;
`;

export const Wrapper = styled.div`
    position: fixed;
    display:flex;
    z-index: 11;
    width: 100%;
    height:100%;
    max-width: 1440px;
`

export const Wrap = styled.div`
    z-index: 2;
    max-width:400px;
    padding: 40px 30px;
    background-color:white;
    border-radius:40px;
    margin: 0 auto;
    font-family: sans-serif;
    height: fit-content;
    place-self: center;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.screens.small}) {
        padding: 30px 20px;
    }
`;
