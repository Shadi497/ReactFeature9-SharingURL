import { useState } from "react";
import {
  createProduct,
  updateProduct,
} from "../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ListForm, Form, FormButton, H } from "../../styles";

const ProductForm = () => {
  const { productSlug, shopId } = useParams();

  const foundproducts = useSelector((state) =>
    state.productReducer.products.find(
      (product) => product.slug === productSlug
    )
  );

  const [product, setProduct] = useState(
    foundproducts
      ? foundproducts
      : {
          name: "",
          price: 0,
          image: "",
          shopId: shopId,
        }
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundproducts) dispatch(updateProduct(product));
    else {
      dispatch(createProduct(product));
    }
    history.push("/shops");
    // window.location.reload(true);
  };

  return (
    <ListForm>
      <Form onSubmit={handleSubmit}>
        <H>{foundproducts ? "Update" : "Create"} Product</H>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Product Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={product.name}
              type="text"
              name="name"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Product Price
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={product.price}
              type="number"
              name="price"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Product Image
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              type="file"
              name="image"
              onChange={handleImage}
            />{" "}
          </div>
        </div>
        <FormButton>
          <button type="submit" class="btn btn-primary align-self-end">
            {foundproducts ? "Update" : "Create"}
          </button>
        </FormButton>
      </Form>
    </ListForm>
  );
};

export default ProductForm;
