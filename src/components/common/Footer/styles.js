import styled from 'styled-components'
import { Wrapper as OriginalWrapper } from 'components/common';

export const StackView = styled.div`
    @media (max-width: ${({ theme }) => theme.screens.medium}) {
        margin-top:1rem;
    }
`;

export const Info = styled(StackView)`
    display:flex;
    flex-direction:column;
    flex:4;
    padding:0 40px 0 0;
    color:${({ theme }) => theme.colors.darkGray};
    p{
        text-align:justify;
        a {
            color:${({ theme }) => theme.colors.red};
        }
    }
    @media (max-width: ${({ theme }) => theme.screens.small}) {
        padding:0 ;
    }
`;

export const Links = styled(StackView)`
    display:flex;
    flex-direction:row;
    flex:4;
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
        flex-direction:column;
    }
`;

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
        text-align: center;
        margin-top:1rem;
    }
`;

export const Actions = styled.div`
    ${({ direction }) => direction === "column" ? 'flex-direction:column;' : 'flex-direction:row;'};
    ${({ place }) => place ? `place-content:${place};` : 'place-content:flex-start;'};
    & > a {
        ${({ color, theme }) => color ?
        (theme.colors[color] ? `color:${theme.colors[color]};` : `color:${color};`)
        : `color:${theme.colors.lightGray};`};
    }
    display:flex;
    flex:1;
    @media (max-width: ${({ theme }) => theme.screens.smaller}) {
        place-content:space-between;
    }
`;

export const SocialMedia = styled.div`
    display:flex;
    flex-direction:column;
    flex:2;
    text-align:center;
    color:${({ theme }) => theme.colors.darkGray};
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
        margin-top:2rem;
    }
`;

export const Wrap = styled(OriginalWrapper)`
    display:flex;
    flex-direction:row;
    background-color:${({ theme }) => theme.colors.lighterBlack};
    color:${({ theme }) => theme.colors.light};
    a{
        text-decoration:none;
        margin:5px;
    }
    @media (max-width: ${({ theme }) => theme.screens.medium}) {
        flex-direction:column;
    }
`;

export const Brand = styled.div`
    flex : 5;
    text-transform: uppercase;
    font-family: cursive;
    color:${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fonts.large};
    line-height: 0.7;
    margin-bottom:2rem;
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
        font-size: 22pt;
    }
`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fonts.medium};
    color:${({ theme }) => theme.colors.light};
    margin-bottom:3rem;
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
        margin-bottom:1rem;
    }
`;