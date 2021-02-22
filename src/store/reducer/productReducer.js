const initialState = {
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case "CREATE_PRODUCT":
      const { newProduct } = action.payload;
      return {
        ...state,
        products: [...state.products, newProduct],
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.updatedProduct.id
            ? action.payload.updatedProduct
            : product
        ),
      };
    default:
      return state;
  }
};

export default reducer;
