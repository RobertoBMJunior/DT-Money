import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { SearchForm } from "./components/SearchForm"
import { Summary } from "./components/Summary"
import { TransactionsTable } from "./components/TransactionsTable"
import { TransactionsProvider } from "./contexts/TransactionsContext"
import { DefaultTheme } from "./themes/DefaultTheme"
import { GlobalStyle } from "./themes/GlobalStyle"

export function App() {
  
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <TransactionsProvider>
        <Header/>
        <Summary/>
        <SearchForm/>
        <TransactionsTable/>
      </TransactionsProvider>

    </ThemeProvider>
  )
}

