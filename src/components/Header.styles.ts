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

        span{
            font-weight: 700;
            font-size: 1.625rem;
            line-height: 41px;
        }

    }

    @media only screen and (max-width: 1300px) {
        padding-left: 5rem;
        padding-right: 5rem;
    }

    @media only screen and (max-width: 957px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media only screen and (max-width: 550px) {

        .logo{
            gap: 0.5rem;

            span{
                font-size: 0.875rem;
            }

            img{
                width: 24px;
            }
        }
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

    @media only screen and (max-width: 550px) {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;

        height: 38px;

    }

`