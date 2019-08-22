import styled from 'styled-components'
import { Pill } from 'components/kit/Button'

export const Button = styled(Pill)`
    position:absolute;
    padding: 13px 50px;
    color:${({ theme }) => theme.colors.white};
    right: 13%;
    @media (max-width: ${({ theme }) => theme.screens.big}) {
        right: 10%;
    }
    @media (max-width: ${({ theme }) => theme.screens.medium}) {
        right: 7%;
    }
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        right: unset;
        top: unset;
        bottom:0;
        position:relative;
        width: fit-content;
        margin: 10px auto;
    }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position:relative;
    & > img {
        max-width: 1100px;
        width:90%;
        padding:0 5%;
        margin: 0 auto 50px;
        max-height: 600px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        & > img {
            margin-bottom:0;
        }
    }
`;

export const NavBar = styled.ul`
    list-style:none;
    display: inline-flex;
    place-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.screens.mid}) {
        flex-direction:column;
    }
    li:hover {
        button {
            color:${({ theme }) => theme.colors.lightBlack};
        }
    }
    li {
        padding: 10px 0;
        border-bottom: 3px solid;
        flex: 1;
        border-color:${({ theme }) => theme.colors.smoke};
        button {
            background: transparent;
            cursor:pointer;
            border: none;
            outline: none;
            font-size: 20pt;
            color:${({ theme }) => theme.colors.lightGray};
        }
    }
    li.active {
        button {
            color:${({ theme }) => theme.colors.lightBlack};
        }
        border-color:red;
    }
`;

export const Title = styled.h2`
    font-weight: 700;
    text-transform: uppercase;
    margin: 3rem auto ;
    text-align: center;
    font-size: 26pt;
`;
