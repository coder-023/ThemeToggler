import {createContext} from "react";

const ThemeContext = createContext(["light" , () => {}]);//Here we have created a Context with default value as light

export default ThemeContext;