import { Button } from "./components/button"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <GlobalStyle/>

      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="sucess"/>
      <Button variant="danger"/>
      <Button/>
      
    </ThemeProvider>
  )
}

export default App
