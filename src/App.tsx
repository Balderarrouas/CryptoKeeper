import { useState } from 'react'
import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid
    templateAreas={{
      base: '"nav" "main"',
      lg: '"nav nav" "aside main"',
    }}>
    <GridItem gridArea={"nav"}>
      <NavBar/>
    </GridItem>
    </Grid>
  )
}

export default App
