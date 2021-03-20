import { DEPLOY } from "./types";

export const deploy = () => {
  return (dispatch, _, { instances: { TodoList }, accounts, admin }) => {
    dispatch({
      type: DEPLOY,
      payload: {
        accounts,
        admin,
        todolist: { instance: TodoList },
      },
    });
  };
};
