// Components
import { Helmet } from "react-helmet";
import DeleteButton from "../Buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../../styles";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UpdateButton from "../Buttons/UpdateButton";

const ProductDetail = (props) => {
  const { productSlug } = useParams();

  const products = useSelector((state) => state.productReducer.products);

  const product = products.find((product) => product.slug === productSlug);

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
      <UpdateButton slug={product.slug} />

      <Helmet>
        <title>{`${product.name} Details`} </title>
      </Helmet>
    </DetailWrapper>
  );
};

export default ProductDetail;
