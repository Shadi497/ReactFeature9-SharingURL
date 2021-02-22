import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  shopReducer,
  productReducer,
  authReducer,
});

export default rootReducer;
