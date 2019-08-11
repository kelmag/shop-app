import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    min-height: 400px;
    min-width: 400px;
    max-height: 470px;
    flex:4;
    margin: 10px 0 0 6rem;
    & > img {
        position:absolute;
        max-width:250px;
    }
    & > img:first-child {
        bottom:0;
        left:0;
        z-index: 9;
    }
    & > img:last-child {
        right:0;
        top:0;
        opacity:.5;
    }
    @media (max-width: ${({ theme }) => theme.screens.larger}) {
        min-height: unset;
        min-width: unset;
        margin: 50px 0 0 0;
        text-align: center;
        & > img, & > img:last-child {
            max-width:200px;
            position:relative;
            opacity:1;
        }
    }
    @media (max-width: ${({ theme }) => theme.screens.medium}) {
        & > img, & > img:last-child {
            max-width:200px;
        }
    }
    @media (max-width: 431px) {
        & > img, & > img:last-child {
            max-width:160px;
        }
    }

`;

export const ImgWrapper = styled.div`
    position:absolute;
    height:100%;
    width:100%;
    & > img {
        position:absolute;
        max-width:250px;
    }
    & > img:first-child {
        bottom:0;
        left:0;
        z-index: 9;
    }
    & > img:last-child {
        right:0;
        top:0;
        opacity:.5;
    }
`;

export const Title = styled.h1`
    line-height: 1.4;
    font-size: 60pt;
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        font-size: 50pt;
    }
    @media (max-width: ${({ theme }) => theme.screens.small}) {
        font-size: ${({ theme }) => theme.fonts.xLarge};
    }
    @media (max-width: ${({ theme }) => theme.screens.smaller}) {
        font-size: 30pt;
    }
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
        font-size: ${({ theme }) => theme.fonts.large};
    }
    @media (max-width: 400px) {
        font-size: 19pt;
    }

`;
