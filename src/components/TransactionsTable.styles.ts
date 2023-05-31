import styled from "styled-components";
import {MagnifyingGlass} from 'phosphor-react'

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

    @media only screen and (max-width: 1300px) {
        padding-left: 5rem;
        padding-right: 5rem;

        td:first-child{
            flex: 2 !important;
        }
    }

    @media only screen and (max-width: 957px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media only screen and (max-width: 800px) {
        tr {
            display: grid;
            grid-template-columns: auto auto;
            align-items: center;
            gap: 1rem 1rem; 

            td:nth-child(1){
                font-size: 1.5rem;
            }

            td:nth-child(2), td:nth-child(4){
                text-align: end;
            }

            td:nth-child(3), td:nth-child(4){
                color: ${props => props.theme["gray-5"]};
            }

            td:nth-child(3)::before{
                content: "➱ " ;
                font-size: 1rem;

            }

            td:nth-child(4)::before{
                content: '❏ ' ;
                font-size: 1rem;

            }
        }
    }

    @media only screen and (max-width: 550px) {
        tr{
            display: grid;
            gap: 0.25rem;
            grid-template-columns: auto auto;
            grid-template-areas: "topo topo"
                                 "meio meio"
                                 "baixo1 baixo2";

            td:nth-child(1){
                grid-area: topo;
                font-size: 1rem;
            }

            td:nth-child(2){
                grid-area: meio;
                text-align: start;
            }
        }
    }



`

interface PriceContainerProps {
    variantColor: 'income' | 'outcome'
}

export const PriceContainer = styled.span<PriceContainerProps>`
    color: ${props => props.variantColor == "income" ? props.theme['green-light'] : props.theme['red']};

    @media only screen and (max-width: 800px) {
        width: inherit;
        font-size: 2rem;
    }

    @media only screen and (max-width: 550px) {
        font-size: 1.25rem;
    }

`