import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme['gray-1']};
    padding: 40px 160px 0;

    display: flex;
    justify-content: space-between;

    height: 212px;

    .logo{
        display: flex;
        align-items: center;
        gap: 1rem;

        height: 41px;

        font-weight: 700;
        font-size: 1.625rem;
        line-height: 41px;
    }
`

export const ButtonNewTransaction = styled.button`
    background-color: ${props => props.theme['green']};
    color: ${props => props.theme.white};

    padding: 0.75rem 1.25rem;
    border-radius: 6px;

    height: 50px;
    border: 0;

    cursor: pointer;
    transition: background-color .2s;

    &:hover{
        background-color: ${props => props.theme['green-light']};
        transition: background-color .2s;
    }

`