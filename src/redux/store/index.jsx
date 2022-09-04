import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

let store;
// development durumunda sistem devtoolsu kullansın ama dışındaki aşamalarda devtools kulllanımasın demek için aşağıdaki gibi yazıyoruz
if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
