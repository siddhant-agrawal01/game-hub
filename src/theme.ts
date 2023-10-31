import {extendTheme,ThemeConfig} from "@chakra-ui/react"

// we need a to create a config object we need to anotate this with theme config,so we access its properties
const config: ThemeConfig = {

    initialColorMode: "dark"
};

const theme  = extendTheme({config}); // calling the extend theme and pass the object with a confilct property. This returns a theme that you store here.   

export default theme;