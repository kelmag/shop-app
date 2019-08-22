import styled from 'styled-components'

export const Wrap = styled.div`
    display: flex;
    position:relative;
    @media (max-width: ${({ theme }) => theme.screens.mid}) {

    }

`;

export const Label = styled.span`
    position:absolute;
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.light};
    font-size: 11pt;
    font-weight: 900;
    max-width: 20px;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50px;
    top: 20px;
    right: 20px;
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        top: 10px;
        right: 10px;
    }
`;