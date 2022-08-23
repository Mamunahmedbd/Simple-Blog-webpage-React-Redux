import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import CombineReducer from "./useReducer";

const Store = createStore(
  CombineReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default Store;
