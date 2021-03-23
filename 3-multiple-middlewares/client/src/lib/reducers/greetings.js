import { DEPLOY } from "../actions/types";

export const initialState = {
  instance: null,
  isPending: false,
  message: null,
  error: null,
};

const greetings = (state = initialState, { type, payload }) => {
  switch (type) {
    case DEPLOY:
      return {
        ...state,
        instance: payload.greetings.instance,
      };
    default:
      return {
        ...state,
        ...payload,
      };
  }
};

export default greetings;
