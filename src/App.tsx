import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import CustomGrid from './components/CustomGrid'
import SideBar from './components/SideBar'
import GridComponent from './components/GridComponent'


function App() {

  return (
    <Grid
    templateAreas={{
      base: '"nav" "main"',
      lg: '"nav nav" "aside main"',
    }}>
    <GridItem gridArea={"nav"}>
      <NavBar/>
    </GridItem>
    <GridItem gridArea={"main"}>
      <CustomGrid/>
    </GridItem>
    <GridItem gridArea={"aside"}>
    <SideBar/>
    </GridItem>
    <GridComponent></GridComponent>
    </Grid>
  )
}

export default App
