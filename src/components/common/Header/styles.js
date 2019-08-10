import styled from 'styled-components'
import constants from 'data/constants'
import { Notify } from 'components/kit/Button'

export const Wrap = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    background-color:#1D1D1D;
    color:white;

`;
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    font-size:24pt;
    &  div {
        border-right: 1px solid #3D3D3D;
        padding:30px;
    }
    @media (max-width: ${constants.screens.mid}) {
        justify-content: space-between;
        & > div {
        border: 0;
            padding:20px 15px;
        }
    }

`;
export const Search = styled.div``;
export const NavBar = styled.div`
    & > span {
        font-size:12pt;
        max-width:70px;
        display: inline-block;
        margin-left:30px;
    }
    @media (max-width: ${constants.screens.tiny}) {
        & > span {
            display:none;
        }
    }
`;
export const Mobile = styled.div`
    text-transform: uppercase;
    padding:10px 0 0 0;
    text-align:center;
    display:none;
    font-family: cursive;
    @media (max-width: ${constants.screens.mid}) {
        display: block;
    }
`;
export const Title = styled.div`
    flex : 5;
    text-align:center;
    text-transform: uppercase;
    font-family: cursive;
    @media (max-width: ${constants.screens.medium}) {
        & {
            padding: 17px!important;
            font-size: 22px;
            line-height: 63px;
        }
    }
    @media (max-width: ${constants.screens.mid}) {
        display:none;
    }
`;
export const Profile = styled.div``;
export const Favorite = styled.div``;
export const Cart = styled(Notify)``;
