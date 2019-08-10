import styled from 'styled-components'
import { Pill } from 'components/kit/Button'


export const SwipperBox = styled.div`
    position: absolute;
    ${({ right }) =>
        right && `right: 8%;`
    }
    ${({ left }) =>
        left && `left: 8%;`
    }
    top:110px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    font-size: ${({ theme }) => theme.fonts.xLarge};
    max-width: 600px;
    @media (max-width: ${({ theme }) => theme.screens.larger}) {
        top:70px;
    }

    @media (max-width: ${({ theme }) => theme.screens.medium}) {
        top:40px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        width: fit-content;
        max-width: unset;
        padding: 0 90px;
        right: unset;
        left: unset;
        margin: auto;
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

export const MainButton = styled(Pill)``;
