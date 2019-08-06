import styled from 'styled-components'

export const Wrap = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width:100%;
    background-color:#1D1D1D;
    font-size:24pt;
    & > div {
        span {
            font-size:12pt;
            max-width:70px;
            display: inline-block;
            margin-left:30px;
        }
        border-right: 1px solid #3D3D3D;
        padding:30px;
        color:white;
    }
`;
export const Search = styled.div``;
export const NavBar = styled.div``;
export const Title = styled.div`
    flex : 5;
    text-align:center;
`;
export const Profile = styled.div``;
export const Favorite = styled.div``;
export const Cart = styled.div``;
