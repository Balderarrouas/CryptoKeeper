import { Grid, GridItem, Text } from "@chakra-ui/react";



const CustomGrid = () => {
return (
    <Grid
  templateRows='repeat(10, 1fr)'
  templateColumns='repeat(10, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid>
)
}

export default CustomGrid