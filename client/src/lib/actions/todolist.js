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
const getTasks = (items) => {
  return {
    type: READ_TASKLIST,
    payload: { items },
  };
};
const addTaskAction = () => {
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

const mapTasks = (count, contract) =>
  new Promise(async (resolve) => {
    let list = [];
    for (let i = 0; i < count; i++) {
      const task = await contract.methods.tasks(i).call();
      list.push(task);
    }
    resolve(list);
  });

export const readTasks = () => {
  return async (dispatch, _, { instances: { TodoList }, admin }) => {
    dispatch(transactionPending());
    await TodoList.methods
      .taskCount()
      .call()
      .then((count) => mapTasks(count, TodoList))
      .then((items) => {
        dispatch(getTasks(items));
        dispatch(transactionSuccess());
      });
  };
};
export const addTask = (content) => {
  return (dispatch, _, { instances: { TodoList }, admin }) => {
    dispatch(transactionPending());
    TodoList.methods
      .addTask(content)
      .send({ from: admin })
      .then(() => dispatch(addTaskAction()))
      .catch(transactionError());
  };
};
export const removeTask = (id) => {
  return (dispatch, _, { instances: { TodoList }, admin }) => {
    dispatch(transactionPending());
    TodoList.methods
      .removeTask(id)
      .send({ from: admin })
      .then(() => dispatch(removeTaskAction(id)))
      .catch(transactionError());
  };
};
export const toggleTask = (id) => {
  return (dispatch, _, { instances: { TodoList }, admin }) => {
    dispatch(transactionPending());
    TodoList.methods
      .toggleTask(id)
      .send({ from: admin })
      .then(() => dispatch(toggleTaskAction(id)))
      .catch(transactionError());
  };
};
