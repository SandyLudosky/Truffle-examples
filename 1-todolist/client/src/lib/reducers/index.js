import { combineReducers } from "redux";
import todolist from "./todolist";
import contracts from "./contracts";
import user from "./user";

export default combineReducers({
  todolist,
  contracts,
  user,
});
