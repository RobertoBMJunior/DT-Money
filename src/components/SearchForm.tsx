import {MagnifyingGlass} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchContainer } from './SearchForm.styles'
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {

    const {fetchTransactions} = useContext(TransactionsContext)

    const { 
        register, 
        handleSubmit,
        formState: {isSubmitting} 
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

async function handleSearchTransaction(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchContainer action="" onSubmit={handleSubmit(handleSearchTransaction)}>
            <input 
                type="text" 
                placeholder='Busque uma transação'
                {...register("query")}
            />
            <button disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchContainer>
    )

}