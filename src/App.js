// Styling
import { GlobalStyle } from "./styles";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import Routes from "./components/Routes";
import Cookies from "js-cookie";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(
    // localStorage.getItem("Theme")
    Cookies.get("Theme") || "light"
  );

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  Cookies.set("Theme", currentTheme);
  localStorage.setItem("Theme", currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      <Routes />
    </ThemeProvider>
  );
}

export default App;
