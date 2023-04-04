import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../utils/formatter";
import { PriceContainer, TableContainer } from "./TransactionsTable.styles";



export function TransactionsTable() {

    const {transactions} = useContext(TransactionsContext)

    return (
        <TableContainer>
            <tbody>
                {transactions.map(transaction => {
                    return (
                        <tr key={transaction.id}>
                            <td>{transaction.description}</td>
                            <td>
                                <PriceContainer variantColor={transaction.type}>
                                    {transaction.type === "outcome" ? "- " : null}
                                    {priceFormatter.format(transaction.price)}
                                </PriceContainer> 
                            </td>
                            <td>{transaction.category}</td>
                            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                        </tr>
                    )
                })}
                

            
            </tbody>
        </TableContainer>
    )
}