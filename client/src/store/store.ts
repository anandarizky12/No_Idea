import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "../reducers/userReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  user,
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
