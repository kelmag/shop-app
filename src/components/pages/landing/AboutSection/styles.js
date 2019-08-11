import styled from 'styled-components'
import { Pill } from 'components/kit/Button'
import { Wrapper } from 'components/common';

export const Wrap = styled(Wrapper)`
    flex-direction:row;
    @media (max-width: ${({ theme }) => theme.screens.medium}) {
        flex-direction:column;
    }
`;

export const Title = styled.h2`
    text-transform:uppercase;
    font-size: ${({ theme }) => theme.fonts.larger};
    font-weight: 800;
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
        font-size: 30pt;
    }
`;
export const Description = styled.p`
    font-size: 18pt;
    text-align: justify;
    color: ${({ theme }) => theme.colors.lightBlack};
    letter-spacing: .8px;
    margin-bottom:4rem;
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
    }
`;
export const Content = styled.div`
    flex:6;
    margin-right: 80px;
    @media (max-width: ${({ theme }) => theme.screens.big}) {
        margin-right: 0;
    }
`;

export const Button = styled(Pill)`
        padding: 13px 50px;
        color:#bbbbbb;
`;
