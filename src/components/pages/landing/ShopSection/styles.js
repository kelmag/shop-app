import styled from 'styled-components'
import { Pill } from 'components/kit/Button'

export const Button = styled(Pill)`
        color:${({ theme }) => theme.colors.lightBlack};
        padding:15px 30px;
        background-color:white;
        margin: 30px 0;
        @media (max-width: ${({ theme }) => theme.screens.mid}) {
            height: 50px;
            place-self: center;
        }
`;


export const Wrapper = styled.div`
    display:flex;
    margin-top:70px;
    background-color:#E8D5B7;
    min-height:300px;
    padding:10px 5%;
    @media (max-width: ${({ theme }) => theme.screens.big}) {
        padding:10px 2%;
    }
    @media (max-width: ${({ theme }) => theme.screens.larger}) {
        flex-direction:column;
        padding:10px 5%;
    }
`;
export const Info = styled.div`
    flex:1;
    padding: 0;
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        text-align:center;
    }
`;
export const Description = styled.p`
    font-size: 16pt;
    color:${({ theme }) => theme.colors.lightBlack};
    letter-spacing: 1px;
    text-align: justify;
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        margin:0;
        text-align:center;
    }
`;
export const Title = styled.h5`
    text-transform: uppercase;
    font-weight: 400;
    margin: 0 0 50px;
    letter-spacing: 1px;
    font-size:${({ theme }) => theme.fonts.larger};
    width: 260px;
    padding: 20px 0px;
    height: fit-content;
    @media (max-width: ${({ theme }) => theme.screens.big}) {
        margin: 0 0 30px;
        font-size:${({ theme }) => theme.fonts.large};
        width: 200px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        width:100%;
        margin:0;
        text-align:center;
    }
`;

export const CardsWrap = styled.div`
    flex:2;
    display: flex;
    justify-content:flex-end;

    @media (max-width: ${({ theme }) => theme.screens.small}) {
        flex-direction:column;
    }
    @media (max-width: ${({ theme }) => theme.screens.big}) {
        justify-content: space-evenly;
    }
`;