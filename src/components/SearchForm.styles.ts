import styled from "styled-components";

export const SearchContainer = styled.form`
    padding: 0 10rem;
    margin-top: 4rem;

    display: flex;
    gap: 1rem;

    input{
        flex: 1;

        background-color: ${props => props.theme["gray-1"]};
        border-radius: 6px;
        border: 0;

        padding: 1rem;

        &::placeholder{
            color: ${props => props.theme["red"]};
        }

        &:focus{
            /* color: ${props => props.theme["green"]}; */
            outline: 1px solid ${props => props.theme['green']};
        }
    }

    button{
        background: transparent;
        padding: 0.875rem 2rem;

        display: flex;
        align-items: center;
        gap: 0.75rem;

        color: ${props => props.theme["green-light"]};

        border: 1px solid ${props => props.theme["green-light"]};
        border-radius: 6px;

        cursor: pointer;

        transition: background-color 0.2s;

        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:not(:disabled):hover{
            background-color: ${props => props.theme["green"]};
            color: ${props => props.theme.white};

            transition: all 0.3s;
        }
    }

    
`