import { combineReducers } from "redux";
import settings from "./settings";
import { userReducer } from "./user.reducer";
export default combineReducers({
  settings,
  //userReducer,
});
