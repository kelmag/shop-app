import styled from 'styled-components'
import constants from 'data/constants'

export const Wrap = styled.button`
    border-radius: 50px;
    background-color: rgba(1,1,1,0.3);
    color:#fff;
    border: 1px solid #fff;
    position:absolute;
    top: 50%;
    right: ${({ right }) => right ? "20px" : "unset"};
    left: ${({ left }) => left ? "20px" : "unset"};
    width:50px;
    height:50px;
    font-size:20pt;
    z-index:9;
    @media (max-width: ${constants.screens.mid}) {

    }

`;
export const Label = styled.span`
    position:absolute;
    background-color: ${constants.colors.red};
    color: ${constants.colors.light};
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