import { combineReducers } from "redux";
import FilterReducer from "./Filters/FilterReducer";
import PostReducer from "./PostReducer/PostReducer";

const CombineReducer = combineReducers({
  postReducer: PostReducer,
  filters: FilterReducer,
});

export default CombineReducer;
