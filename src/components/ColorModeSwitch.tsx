import { HStack, Switch, Text ,useColorMode } from '@chakra-ui/react'


const  ColorModeSwitch = () => {
    // this returns an object with two properties,we destructure the object and grab a function called toggle colormode,and colormode which represent the current color mode 
    const {  toggleColorMode,colorMode } = useColorMode();
  return (
    <HStack>
        <Switch colorScheme='green' isChecked = {colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default  ColorModeSwitch;