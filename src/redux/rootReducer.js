import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./home/directoryReducer";
import shopReducer from "./shop/shopReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default rootReducer;
