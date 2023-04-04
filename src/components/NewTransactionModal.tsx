import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, Title, TransactionType, TransactionTypeButton } from './NewTransactionModal.styles';
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../lib/axios';
import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income','outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal () {
    const {createTransaction} = useContext(TransactionsContext)

    const {
        control, 
        register,
        handleSubmit,
        formState: {isSubmitting},
        reset,
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

        
    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description,price,category,type } = data

        await createTransaction({
            description,
            price,
            category,
            type,
        })
        
        reset()
    }

    return(
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <CloseButton  asChild>
                    <button>
                        <X size={24}/>
                    </button>
                </CloseButton>
                <Title>Nova Transação</Title>
                <Dialog.Description>
                    Insira os dados da sua transação
                </Dialog.Description>
                <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        type="text" 
                        placeholder='Descrição'
                        {...register('description')}
                    />
                    <input 
                        type="text" 
                        placeholder='Preço'
                        {...register('price', {valueAsNumber: true})}
                    />
                    <input  
                        type="text" 
                        placeholder='Categoria'
                        {...register('category')}
                    />
                
                    <Controller
                        control={control}
                        name='type'
                        render={({field})=> {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton value='income' variantColor='green'>
                                        <ArrowCircleUp size={24}/>
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton value='outcome' variantColor='red'>
                                        <ArrowCircleDown size={24}/>
                                        Saída
                                    </TransactionTypeButton>
                            
                                </TransactionType>
                            )
                        }}  
                    />
                   
                    <button type='submit' disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}