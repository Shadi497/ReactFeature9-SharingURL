// Styling
import { DeleteButtonStyled } from "../../styles";
import { deleteProduct } from "../../store/actions/productActions";
import { useDispatch } from "react-redux";

const DeleteButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      class="btn btn-danger "
      onClick={() => dispatch(deleteProduct(props.productId))}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
