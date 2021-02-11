// Styling
import { GlobalStyle } from "./styles";
import React, { useState } from "react";
import { Route, Switch } from "react-router";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
// Data
import data from "./products";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";

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
  const [currentTheme, setCurrentTheme] = useState("light");
  const [products, setProducts] = useState(data);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const deleteProduct = (productId) => {
    const updatedList = products.filter((product) => product.id !== productId);
    setProducts(updatedList);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      <Switch>
        <Route exact path={["/products/new", "/products/:productSlug/edit"]}>
          <ProductForm />
        </Route>
        <Route exact path="/products/:productSlug">
          <ProductDetail deleteProduct={deleteProduct} />
        </Route>
        <Route exact path="/products">
          <ProductList deleteProduct={deleteProduct} />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
