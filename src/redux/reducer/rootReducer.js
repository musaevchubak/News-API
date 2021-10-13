import {combineReducers} from "redux";
import postReducer from "./cardReducer";

const rootReducer = combineReducers({
  post: postReducer,
})

export default rootReducer;
