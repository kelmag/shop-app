import styled from 'styled-components'
import { Pill, Rounded } from 'components/kit/Button'


export const Category = styled.div`
    font-size: 16pt;
    color: white;
    @media (max-width: ${({ theme }) => theme.screens.big}) {
        font-size:12pt;
    }
`;

export const Name = styled.div`
    font-size:26pt;
    color: white;
    margin: 30px auto;
    @media (max-width: ${({ theme }) => theme.screens.big}) {
        font-size:22pt;
        margin: 15px auto;
    }
`;

export const Buttons = styled.div`
    flex:2;
    place-content: space-between;
    display:flex;
`;

export const Action = styled.div`
    display:flex;
    place-content: space-between;
    @media (max-width: ${({ theme }) => theme.screens.larger}) {
        flex-direction:column;
        .price p {
            max-width: unset;
            margin-top: 30px;
        }
    }
    @media (max-width: ${({ theme }) => theme.screens.medium}) {
        flex-direction:row;
        .price p {
            text-align:right;
        }
    }
`;

export const Price = styled.div`
    flex:1;
    color: white;
    font-size: 20pt;
    p {
        margin: 0 auto;
        max-width: min-content;
    }
    margin-top: -10px;
`;

export const LoveButton = styled(Rounded).attrs({
    bordered: false,
})`
    position:relative;
    top:0;
    align-self: center;
`;

export const BuyButton = styled(Pill)`
        color:${({ theme }) => theme.colors.lightBlack};
        padding:15px 30px;
        background-color:white;
`;

export const Wrap = styled.div`
    display:flex;
`;
export const ImgWrapper = styled.div`
    &.square-img {
        display:none;
    }
    flex:1;
    position:relative;
    text-align:right;

`;
export const ProductInfo = styled.div`
    flex:1;
`;

export const Wrapper = styled.div`
    display:flex;
    ${({ color, theme }) => `background-color:${theme.colors[color]};`};
    ${({ flex }) => flex && `flex:${flex};`};
    box-shadow: inset 11px 2px 130px -5px #000000;
    @media (max-width: ${({ theme }) => theme.screens.larger}) {
    }
    @media (max-width: ${({ theme }) => theme.screens.medium}) {
    }
    @media (max-width: 431px) {
    }

    &.square{
        padding:40px;
        @media (max-width: ${({ theme }) => theme.screens.big}) {
            padding:30px;
        }
        & .square-img {
            display:block;
            img {
                max-height: 140px;
                @media (max-width: ${({ theme }) => theme.screens.larger}) {
                    max-height: 110px;
                }
                width: auto;
            }
        }
        & .normal-img{
            display:none;
        }
    }

    &.portrait{
        flex-direction:column-reverse;
        padding:40px;
        @media (max-width: ${({ theme }) => theme.screens.big}) {
            padding:30px;
        }
        .normal-img {
            margin: 0 auto;
            display: block;
            img {
                max-height: 280px;
                @media (max-width: ${({ theme }) => theme.screens.larger}) {
                    max-height: 200px;
                }
                width: initial;
            }
        }
    }
    &.rectangle{
        place-content: space-between;
        padding: 40px 110px;
        .normal-img img {
            max-height: 200px;
        }
        @media (max-width: ${({ theme }) => theme.screens.big}) {
            padding: 40px 30px;
        }
    }

`;
