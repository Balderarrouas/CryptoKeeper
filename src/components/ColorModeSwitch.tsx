import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react"


// Color mode switch changes dark/light mode
const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode(); // useColorMode from chakra

    return(
        <HStack>
            <Switch
            colorScheme="green"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
            ></Switch>
            <Text>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch;