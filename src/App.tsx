import styled from 'styled-components'
import './App.css'
// import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {

  return (
    <StyledMainAppContainer>
    {/* <Header /> */}
    <Main />
    </StyledMainAppContainer>
  )
}

const StyledMainAppContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
