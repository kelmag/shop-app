import styled from 'styled-components'

export const Wrap = styled.button`
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.pink};
    color:#fff;
    top: 50%;
    right: ${({ right }) => right ? "20px" : "unset"};
    left: ${({ left }) => left ? "20px" : "unset"};
    font-size: ${({ theme }) => theme.fonts.normal};
    border:unset;
    padding: 20px 40px;
    box-shadow: 0px 0px 23px -8px #ccc;
    i {
        margin-right:5px;
    }
    @media (max-width: ${({ theme }) => theme.screens.smaller}) {
        padding: 10px 20px;
        font-size: ${({ theme }) => theme.fonts.medium};

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