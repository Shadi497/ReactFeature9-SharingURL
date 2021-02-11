import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const UpdateButton = (props) => {
  //

  return (
    <Link to={`/products/${props.slug}/edit`}>
      <AddButtonStyled>Update</AddButtonStyled>
    </Link>
  );
};

export default UpdateButton;
