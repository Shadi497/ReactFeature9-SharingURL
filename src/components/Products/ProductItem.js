// Components
import DeleteButton from "../Buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../../styles";
import { Link } from "react-router-dom";
import UpdateButton from "../Buttons/UpdateButton";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      {/* <Link to={`/products/${product.slug}`}> */}
      <img alt={product.name} src={product.image} />
      {/* </Link> */}
      <p>{product.name}</p>
      <p className="product-price">{product.price} BD</p>

      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
      <UpdateButton slug={product.slug} />
    </ProductWrapper>
  );
};

export default ProductItem;
