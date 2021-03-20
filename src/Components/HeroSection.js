import React,{useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () =>{
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return(
        <div style={{
            padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:"center"
        }}>
            <h1>Context API theme Toggler</h1>
            <p>Nice para</p>
            <button style={{backgroundColor:"#26ae60",
                            padding:"10px 150px",
                            fontSize:"20px",
                            color:"#FFF",
                            border: `${currentTheme.border}`
        }}><p> Click Me</p></button>
        </div>

    )
}
export default HeroSection;