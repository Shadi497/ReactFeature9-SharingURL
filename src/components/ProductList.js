// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import products from "../products";
import { Helmet } from "react-helmet";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = props.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={props.deleteProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
      <Helmet>
        <title>Products List </title>
      </Helmet>
    </div>
  );
};

export default ProductList;
