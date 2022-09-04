import { combineReducers } from "redux";

import appReducer from "./appReducer";
import newReducer from "./newReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  news: newReducer,
});
export default rootReducer;
