import styled from 'styled-components'

export const Wrap = styled.div`
    font-weight:400;
    padding:0;
    width: 100%;
    max-width:520px;
    position: relative;
    margin: 60px auto 10px;
    i {
        position:absolute;
        right: 11px;
        top: 32%;
        font-size: 17pt;
        color:${({ theme }) => theme.colors.red};
    }
`;

export const EmailInput = styled.input`
    font-size:${({ theme }) => theme.fonts.normal};
    font-weight:400;
    padding: 18px 7%;
    margin:0;
    width:86%;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.smoke};
    outline:none;
    box-shadow: 0px 0px 17px -8px #000;

`;

export const Title = styled.h2`
    text-transform:uppercase;
    font-weight:400;
    font-size:${({ theme }) => theme.fonts.large}
`;

export const Wrapper = styled.div`
    padding:20px 5px;
    text-align:center;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
`;