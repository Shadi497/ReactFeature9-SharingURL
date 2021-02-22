import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const UpdateButton = (props) => {
  //
  return (
    <Link to={`/products/${props.slug}/edit`}>
      <button
        type="button"
        class="btn btn-warning ml-3"
        style={{ color: "white" }}
      >
        Update
      </button>
    </Link>
  );
  return <AddButtonStyled>Update</AddButtonStyled>;
};

export default UpdateButton;
