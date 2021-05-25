import { AUTHENTICATE } from "./types";

export const authenticate = () => {
  return (dispatch, _, { admin }) => {
    dispatch({ type: AUTHENTICATE, payload: { account: admin } });
  };
};

export const disconnect = () => {
  return (dispatch, _) => {
    dispatch({ type: AUTHENTICATE, payload: { account: null } });
  };
};
