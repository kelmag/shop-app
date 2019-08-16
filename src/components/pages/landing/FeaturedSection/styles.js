import styled from 'styled-components'

export const CardWrap = styled.div`
    ${({ direction }) => direction === "column" ? 'flex-direction:column;' : 'flex-direction:row;'};
    ${({ flex }) => flex && `flex:${flex};`};
    display:flex;
    @media (max-width: ${({ theme }) => theme.screens.medium}) {
        flex-direction:column;
        & div .square-img {
            display:block;
            img {
                max-height: 140px;
                width: auto;
            }
        }
        & .normal-img, .portrait div.normal-img{
            display:none;
        }
    }
`;
export const Wrap = styled.div``;

export const Title = styled.h2`
    font-weight: 700;
    text-transform: uppercase;
    margin: 1rem auto 3rem;
    text-align: center;
    font-size: 26pt;
`;
