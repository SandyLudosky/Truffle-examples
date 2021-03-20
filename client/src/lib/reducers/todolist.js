import { DEPLOY, ADD_TASK } from "../actions/types";

export const initialState = {
  instance: null,
  items: [],
  isPending: false,
  error: null,
};

const todolist = (state = initialState, { type, payload }) => {
  switch (type) {
    case DEPLOY:
      return {
        ...state,
        instance: payload.todolist.instance,
      };
    default:
      return {
        ...state,
        ...payload,
      };
  }
};
export default todolist;
