import usersReducer from "./usersReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  users: usersReducer,
  form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
