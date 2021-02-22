// import { DELETE_SHOP, UPDATE_SHOP } from "../actions/shopActions";
// import { CREATE_SHOP, FETCH_SHOPS } from "../actions/shopActions";

const initialState = {
  shops: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SHOPS":
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };

    case "CREATE_SHOP":
      const { newShop } = action.payload;
      return {
        ...state,
        shops: [...state.shops, newShop],
      };

    default:
      return state;
  }
};

export default reducer;
