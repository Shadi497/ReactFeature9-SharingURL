import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const AddButton = () => {
  return (
    <Link to="/products/new">
      <AddButtonStyled>Add Product</AddButtonStyled>
    </Link>
  );
};

export default AddButton;
