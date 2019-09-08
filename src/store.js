import { createStore } from "redux";
import sign_in from "./modules/sign-in";

export default createStore(
  sign_in,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
