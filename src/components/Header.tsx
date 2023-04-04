import { ButtonNewTransaction, HeaderContainer } from "./Header.styles";
import logo from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "./NewTransactionModal";


export function Header() {
    return(
        <HeaderContainer>
            <div className="logo">
                <img src={logo} alt="" />
                DT Money
            </div>

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <ButtonNewTransaction>
                        Nova Transação
                    </ButtonNewTransaction>
                </Dialog.Trigger>
                
                <NewTransactionModal/>
                
            </Dialog.Root>

        </HeaderContainer>
    )
}