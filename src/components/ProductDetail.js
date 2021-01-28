// Components
import { Helmet } from "react-helmet";
// Styling
import { DetailWrapper } from "../styles";
import { Redirect, useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const { productSlug } = useParams();
  const product = props.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <Helmet>
        <title>{`${product.name} Details`} </title>
      </Helmet>
    </DetailWrapper>
  );
};

export default ProductDetail;
