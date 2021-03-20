import {
  TRANSACTION_PENDING,
  TRANSACTION_SUCCESS,
  TRANSACTION_ERROR,
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  READ_TASKLIST,
} from "./types";

const transactionPending = () => {
  return {
    type: TRANSACTION_PENDING,
    payload: { isPending: true },
  };
};
const transactionSuccess = () => {
  return {
    type: TRANSACTION_SUCCESS,
    payload: { isPending: false },
  };
};
const transactionError = (error) => {
  return {
    type: TRANSACTION_ERROR,
    payload: { isPending: false, error },
  };
};

const readTasksAction = (items) => {
  return {
    type: READ_TASKLIST,
    payload: { items },
  };
};

const addTaskAction = (content) => {
  return {
    type: ADD_TASK,
  };
};
const removeTaskAction = (id) => {
  return {
    type: REMOVE_TASK,
    payload: { id },
  };
};

const toggleTaskAction = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: { id },
  };
};

export const readTasks = () => {
  return (dispatch, _, { instances: { TodoList }, admin }) => {
    dispatch(transactionPending());
    TodoList.methods
      .tasks()
      .call()
      .then((result) => {
        dispatch(readTasksAction(result));
        dispatch(transactionSuccess());
      })
      .catch(transactionError());
  };
};
export const addTask = (content) => {
  return (dispatch, _, { instances: { TodoList }, admin }) => {
    dispatch(transactionPending());
    TodoList.methods
      .addTask(content)
      .send({ from: admin })
      .then(() => {
        dispatch(addTaskAction());
        readTasks();
      })
      .catch(transactionError());
  };
};
export const removeTask = (id) => {
  return (dispatch, _, { instances: { TodoList }, admin }) => {
    dispatch(transactionPending());
    TodoList.methods
      .removeTask(id)
      .send({ from: admin })
      .then(() => {
        dispatch(removeTaskAction(id));
        readTasks();
      })
      .catch(transactionError());
  };
};
export const toggleTask = (id) => {
  return (dispatch, _, { instances: { TodoList }, admin }) => {
    dispatch(transactionPending());
    TodoList.methods
      .toggleTask(id)
      .send({ from: admin })
      .then(() => {
        dispatch(toggleTaskAction(id));
        readTasks();
      })
      .catch(transactionError());
  };
};
