import { Grid } from "@chakra-ui/react";



const CustomGrid = () => {
return (
    <Grid
  templateRows='repeat(10, 1fr)'
  templateColumns='repeat(10, 1fr)'
  gap={4}
>
</Grid>
)
}

export default CustomGrid


