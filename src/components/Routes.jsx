import { Route, Switch } from "react-router";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import Home from "./Home";
// Components
import ProductList from "./Products/ProductList";
// Data
import ProductDetail from "./Products/ProductDetail";
import ProductForm from "./Products/ProductForm";
import ShopList from "./Shops/ShopList";
import ShopDetail from "./Shops/ShopDetail";
import ShopForm from "./Shops/ShopForm";
import Signup from "./Authentication/Signup";
import Signin from "./Authentication/Signin";

export default function Routes() {
  const [products, setProducts] = useState();

  const Sproducts = useSelector((state) => state.productReducer.products);

  const deleteProduct = (productId) => {
    const updatedList = products.filter((product) => product.id !== productId);
    setProducts(updatedList);
  };

  return (
    <Switch>
      <Route
        exact
        path={["/shops/:shopId/products/new", "/products/:productSlug/edit"]}
      >
        <ProductForm />
      </Route>

      <Route exact path="/shops/:shopId">
        <ProductList deleteProduct={deleteProduct} products={Sproducts} />
      </Route>

      <Route exact path={"/shops/new"}>
        <ShopForm />
      </Route>

      <Route path="/shops">
        <ShopList />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
