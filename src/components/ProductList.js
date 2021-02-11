// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import AddButton from "./Buttons/AddButton";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loading />;
  const productList = products
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
      <AddButton />
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
      <Helmet>
        <title>Products List </title>
      </Helmet>
    </div>
  );
};

export default ProductList;
