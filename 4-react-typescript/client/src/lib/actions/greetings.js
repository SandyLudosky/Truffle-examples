import {
  WRITE_MESSAGE_PENDING,
  WRITE_MESSAGE_SUCCESS,
  WRITE_MESSAGE_ERROR,
  READ_MESSAGE_PENDING,
  READ_MESSAGE_SUCCESS,
  READ_MESSAGE_ERROR,
} from "./types";

const writeMessagePending = () => {
  return {
    type: WRITE_MESSAGE_PENDING,
    payload: { isPending: true },
  };
};
const writeMessageSuccess = () => {
  return {
    type: WRITE_MESSAGE_SUCCESS,
    payload: { isPending: false },
  };
};
const writeMessageError = (error) => {
  return {
    type: WRITE_MESSAGE_ERROR,
    payload: { isPending: false, error },
  };
};
const readMessagePending = () => {
  return {
    type: READ_MESSAGE_PENDING,
    payload: { isPending: true },
  };
};
const readMessageSuccess = (message) => {
  return {
    type: READ_MESSAGE_SUCCESS,
    payload: { isPending: false, message },
  };
};
const readMessageError = (error) => {
  return {
    type: READ_MESSAGE_ERROR,
    payload: { isPending: false, error },
  };
};

export const writeMessage = (message) => {
  return (dispatch, _, { instances: { Greetings }, admin }) => {
    dispatch(writeMessagePending());
    Greetings.methods
      .write(message)
      .send({ from: admin })
      .then((result) => {
        dispatch(writeMessageSuccess(!result.status));
        dispatch(readMessage());
      })
      .catch(writeMessageError);
  };
};
export const readMessage = () => {
  return (dispatch, _, { instances: { Greetings } }) => {
    dispatch(readMessagePending());
    Greetings.methods
      .read()
      .call()
      .then((result) => dispatch(readMessageSuccess(result)))
      .catch(readMessageError);
  };
};
