// Styling
import { ListWrapper } from "../../styles";
// Components
import ShopProductItem from "./ShopProductItem";

import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const ProductList = (props) => {
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loading />;
  const productList = props.products.map((product) => (
    <ShopProductItem
      product={product}
      key={product.id}
      deleteProduct={props.deleteProduct}
    />
  ));

  return (
    <div>
      {/* <AddButton /> */}
      <Helmet>
        <title>Products List </title>
      </Helmet>
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;
