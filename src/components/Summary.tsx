import { PictureContainer, SummaryContainer } from "./Summary.styles";
import {ArrowCircleUp, ArrowCircleDown, CurrencyDollar} from 'phosphor-react'
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { priceFormatter } from "../utils/formatter";

export function Summary () {
    const {transactions} = useContext(TransactionsContext)

    const summary = transactions.reduce((accumulator, transaction) => {
        if(transaction.type === "income") {
            accumulator.income += transaction.price;
            accumulator.total += transaction.price
            
        }
        else {
            accumulator.outcome += transaction.price;
            accumulator.total -= transaction.price
        }
        return accumulator
    },
    {
        income: 0,
        outcome:0,
        total: 0
    }
    ) 

    return (
        <SummaryContainer>
            <PictureContainer variantIcon='green'>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32}/>
                </header>
                <span className="value">{priceFormatter.format(summary.income)}</span>
            </PictureContainer>

            <PictureContainer variantIcon='red'>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32}/>
                </header>
                <span className="value">
                    {priceFormatter.format(summary.outcome)}
                </span>
            </PictureContainer>

            <PictureContainer variantIcon='white' variantBackground='green'>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32}/>
                </header>
                <span className="value">{priceFormatter.format(summary.total)}</span>
            </PictureContainer>
        </SummaryContainer>
    )
}