import { DEPLOY, ADD_TASK } from "../actions/types";

export const initialState = {
  instance: null,
  items: [],
  isPending: false,
  error: null,
};

const greetings = (state = initialState, { type, payload }) => {
  switch (type) {
    case DEPLOY:
      return {
        ...state,
        instance: payload.todolist.instance,
      };
    case ADD_TASK: {
      return {
        ...state,
        todolist: [...state.items, payload.task],
      };
    }
    default:
      return {
        ...state,
        ...payload,
      };
  }
};

export default greetings;
