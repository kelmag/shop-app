import styled from 'styled-components'


export const Wrapper = styled.div`
    padding:6rem;
    display:flex;

    @media (max-width: ${({ theme }) => theme.screens.medium}) {
        padding:4rem;
    }
    @media (max-width: ${({ theme }) => theme.screens.small}) {
        padding:3rem;
    }
    @media (max-width: ${({ theme }) => theme.screens.smaller}) {
        padding:2rem;
    }
    @media (max-width: ${({ theme }) => theme.screens.tiny}) {
        padding:1rem;
    }
`;
