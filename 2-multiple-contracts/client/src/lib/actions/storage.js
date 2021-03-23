import {
  SET_VALUE_ERROR,
  SET_VALUE_SUCCESS,
  SET_VALUE_PENDING,
  GET_VALUE_SUCCESS,
  GET_VALUE_ERROR,
  GET_VALUE_PENDING,
} from "./types";

const getValueSuccess = (value) => {
  return {
    type: GET_VALUE_SUCCESS,
    payload: { storageValue: value, isPending: false },
  };
};
const setValuePending = () => {
  return {
    type: SET_VALUE_PENDING,
    payload: { isPending: true },
  };
};
const setValueSuccess = (value) => {
  return {
    type: SET_VALUE_SUCCESS,
    payload: { isPending: value },
  };
};
const getValueError = (err) => {
  return {
    type: GET_VALUE_ERROR,
    payload: { error: err },
  };
};
const getValuePending = () => {
  return {
    type: GET_VALUE_PENDING,
    payload: { isPending: true },
  };
};
const setValueError = (err) => {
  return {
    type: SET_VALUE_ERROR,
    payload: { error: err },
  };
};

export const setValue = (value) => {
  return (dispatch, _, { instances: { SimpleStorage }, admin }) => {
    dispatch(setValuePending());
    SimpleStorage.methods
      .set(value)
      .send({ from: admin })
      .then((result) => {
        dispatch(setValueSuccess(!result.status));
        dispatch(getValue());
      })
      .catch(setValueError);
  };
};
export const getValue = () => {
  return (dispatch, _, { instances: { SimpleStorage } }) => {
    dispatch(getValuePending());
    SimpleStorage.methods
      .get()
      .call()
      .then((result) => dispatch(getValueSuccess(result)))
      .catch(getValueError);
  };
};
