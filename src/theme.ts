import {extendTheme,ThemeConfig} from "@chakra-ui/react"

// we need a to create a config object we need to anotate this with theme config,so we access its properties
const config: ThemeConfig = {

    initialColorMode: "dark"
};

const theme  = extendTheme({config,
colors:{
    gray:{
        50: '#f9f9f9',
        100: '#ededed',
        200: '#d3d3d3',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111',
    }
}}); // calling the extend theme and pass the object with a confilct property. This returns a theme that you store here.   

export default theme;