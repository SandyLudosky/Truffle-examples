import { AUTHENTICATE } from "../actions/types";

export const initialState = {
  account: null,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTHENTICATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
export default user;
