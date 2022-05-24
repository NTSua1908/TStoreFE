import { createStore } from "redux";
import auth from "./auth.js";

const store = createStore(auth);

export default store;
