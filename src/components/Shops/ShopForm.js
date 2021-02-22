import { useState } from "react";
import { createShop } from "../../store/actions/shopActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ListForm, Form, FormButton, H } from "../../styles";

const ShopForm = () => {
  const [shop, setShop] = useState({
    name: "",
    image: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    setShop({ ...shop, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setShop({ ...shop, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createShop(shop));

    history.push("/shops");
  };

  return (
    <ListForm>
      <Form onSubmit={handleSubmit}>
        <H>Create Shop</H>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Shop Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={shop.name}
              type="text"
              name="name"
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Shop Image
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
            Create
          </button>
        </FormButton>
      </Form>
    </ListForm>
  );
};

export default ShopForm;
