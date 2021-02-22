import { fetchProducts } from "../store/actions/productActions";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { fetchShops } from "./actions/shopActions";
import { checkToken } from "./actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchProducts());
store.dispatch(fetchShops());
store.dispatch(checkToken());

export default store;
