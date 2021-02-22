import { ProductWrapper } from "../../styles";
import { Link } from "react-router-dom";

const ShopItem = (props) => {
  const shop = props.shop;

  return (
    <ProductWrapper>
      <Link to={`/shops/${shop.id}`}>
        <img alt={shop.name} src={shop.image} />
      </Link>
      <p>{shop.name}</p>
    </ProductWrapper>
  );
};

export default ShopItem;
