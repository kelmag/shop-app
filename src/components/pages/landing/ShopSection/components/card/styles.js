import styled from 'styled-components'
import { Pill, Rounded } from 'components/kit/Button'


export const Name = styled.div`
    font-size: 20pt;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.lightBlack};
    margin: 30px auto;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.screens.big}) {
        font-size:17pt;
        font-weight: 500;
        margin: 15px auto;
    }
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        font-size: 14pt;
        margin: 15px auto;
        font-weight: 500;
    }
`;


export const Action = styled.div`
    display:flex;
    place-content: space-between;
    @media (max-width: ${({ theme }) => theme.screens.larger}) {
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
    color: ${({ theme }) => theme.colors.red};
    font-size: 14pt;
    line-height: 2;
`;

export const LoveButton = styled(Rounded).attrs({
    bordered: false,
})`
    position:relative;
    top: -6px;
    font-size: 20px;
    height: 50px;
    align-self: center;
    background-color:white;
    color:darkgreen;
    box-shadow: 0px 0px 23px -8px #000;

`;

export const BuyButton = styled(Pill)`
        padding:0 22px;
        height: 40px;
        @media (max-width: ${({ theme }) => theme.screens.mid}) {
            height: 50px;
            place-self: center;
        }
`;

export const ImgWrapper = styled.div`
    flex:1;
    position:relative;
    text-align:center;
    img {
        max-width:200px;
        max-height: 160px;
    }

`;
export const ProductInfo = styled.div`
    flex:1;
`;

export const Wrapper = styled.div`
    background-color:white;
    margin:20px;
    display:flex;
    flex-direction:row;
    padding:20px 40px;
    ${({ color, theme }) => `background-color:${theme.colors[color]};`};
    ${({ flex }) => flex && `flex:${flex};`};
    width: 260px;
    height: fit-content;
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        padding:20px;
        margin: 10px auto;
    }
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
        padding: 30px 15px;
    }
`;
