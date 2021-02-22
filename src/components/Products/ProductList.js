// Styling
import { ListWrapper, Title } from "../../styles";
// Components
import ProductItem from "../Products/ProductItem";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import AddButton from "../Buttons/AddButton";

const ProductList = (props) => {
  const [query, setQuery] = useState("");
  const { shopId } = useParams();
  const user = useSelector((state) => state.authReducer.user);
  const shop = useSelector((state) =>
    state.shopReducer.shops.find((shop) => shop.id === +shopId)
  );
  if (!user) {
    return <Redirect to="/signin" />;
  }

  const productList = props.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .filter((product) => product.shopId === +shopId)
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={props.deleteProduct}
      />
    ));

  return (
    <div>
      {/* <AddButton /> */}
      <Title>{shop ? shop.name : ""}</Title>
      <SearchBar setQuery={setQuery} />
      <Link to={`/shops/${shopId}/products/new`}>
        <AddButton />
      </Link>
      <ListWrapper>{productList}</ListWrapper>
      <Helmet>
        <title>Products List </title>
      </Helmet>
    </div>
  );
};

export default ProductList;
