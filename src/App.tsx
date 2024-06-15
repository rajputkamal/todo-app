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
  width: auto;
  max-width: 600px;
  margin: 0 auto;
`

export default App
