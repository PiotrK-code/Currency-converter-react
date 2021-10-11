import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    margin-right: 5px;
    display: inline-block;
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.colot.silver};
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.colot.teal};
    color: ${({ theme }) => theme.colot.white};
    border-radius: 5px;
    border: none;
    padding: 10px;
    transition: 0,3s;
    
    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.colot.teal};
    text-align: center;
`;

export const Info = styled.p`
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.colot.emperor};
`;