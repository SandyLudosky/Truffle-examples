import { combineReducers } from "redux";
import todolist from "./todolist";
import contracts from "./contracts";

export default combineReducers({
  todolist,
  contracts,
});
