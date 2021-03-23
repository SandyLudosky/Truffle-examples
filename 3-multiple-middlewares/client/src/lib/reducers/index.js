import { combineReducers } from "redux";
import contracts from "./contracts";
import storage from "./storage";
import greetings from "./greetings";

export default combineReducers({
  storage,
  contracts,
  greetings,
  /* additional reducers here */
});
