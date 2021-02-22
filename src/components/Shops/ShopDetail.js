// Components
import { Helmet } from "react-helmet";
// Styling
import { DetailWrapper } from "../../styles";
import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddButton from "../Buttons/AddButton";
import ShopProductList from "./ShopProductList";

const ShopDetail = () => {
  const { shopSlug } = useParams();

  const allProducts = useSelector((state) => state.productReducer.products);
  const shop = useSelector((state) => {
    return state.shopReducer.shops.find((shop) => shop.slug === shopSlug);
  });

  console.log(shop);
  const products = shop.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );

  if (!shop) return <Redirect to="/shops" />;

  return (
    <>
      <DetailWrapper>
        <Helmet>
          <title>{`${shop.name} Details`} </title>
        </Helmet>
        <h1>{shop.name}</h1>
        <img src={shop.image} alt={shop.name} />
      </DetailWrapper>
      <Link to={`/shops/${shop.id}/products/new`}>
        <AddButton />
      </Link>
      <ShopProductList products={products} />
    </>
  );
};

export default ShopDetail;
