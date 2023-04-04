import styled from "styled-components";

export const TableContainer = styled.table`
    padding: 1.5rem 10rem 1.5rem;
    margin: 0;

    width: 100%;



    tr{
        background-color: ${props => props.theme["gray-3"]};

        display: flex;

        padding: 1.25rem 2rem;

        border-radius: 6px;

        margin-bottom: 0.5rem;

        td:first-child{
            flex: 3;
        }

        td:nth-child(3){
            flex: 2
        }

        td{
            flex: 1;
        }
    }
`

interface PriceContainerProps {
    variantColor: 'income' | 'outcome'
}

export const PriceContainer = styled.span<PriceContainerProps>`
    color: ${props => props.variantColor == "income" ? props.theme['green-light'] : props.theme['red']}

`