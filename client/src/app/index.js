import React, { useEffect, useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import {
  readTasks as readTasksAction,
  addTask as addTaskAction,
  removeTask as removeTaskAction,
  toggleTask as toggleTaskAction,
} from "../lib/actions/todolist";
import Spinner from "./Spinner";
import "./App.css";

const App = ({
  instance,
  items,
  error,
  event,
  isPending,
  readTasks,
  addTask,
  removeTask,
  toggleTask,
}) => {
  const inputRef = useRef();
  const [todoInput, setTodoInput] = useState(null);

  const handleOnChange = (e) => setTodoInput(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!todoInput) {
      return false;
    }
    addTask(todoInput);
    inputRef.current.value = null;
  };

  const readTasksCallback = useCallback(() => readTasks(), [readTasks]);
  useEffect(() => readTasksCallback(), [readTasksCallback]);
  useEffect(() => readTasksCallback(), [
    readTasksCallback,
    event?.transactionHash,
    event?.event,
  ]);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-3">
          <h1>TodoList</h1>
          <form onSubmit={handleOnSubmit} className="mt-5">
            <input
              type="text"
              className="col-form-label col-md-9 col-lg"
              onChange={handleOnChange}
              placeholder="enter todo"
              ref={inputRef}
            />
            <button type="submit" className="col-md-2 offset-1">
              Submit
            </button>
          </form>
        </div>
        <div className="mt-5 col-md-6 offset-3">
          <Spinner />
          {items.map(({ completed, content, id }) => {
            const isCompleted = completed ? "completed" : null;
            return (
              <div
                className="d-flex justify-content-between align-items-center mb-2 border"
                style={{ opacity: isPending ? "0.4" : "1" }}
              >
                <p className={isCompleted}>{content}</p>
                <div>
                  <button onClick={() => toggleTask(id)}>✔️</button>
                  &nbsp;
                  <button onClick={() => removeTask(id)}>🚮</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="footer">
        {!!instance && `contract's address : ${instance.options.address}`}
      </p>
    </div>
  );
};

const mapStateToProps = ({
  contracts: { event },
  todolist: { instance, items, isPending, error },
}) => {
  return {
    instance,
    items,
    isPending,
    error,
    event,
  };
};
const mapDispatchToProps = (dispatch) => ({
  readTasks: () => dispatch(readTasksAction()),
  addTask: (content) => dispatch(addTaskAction(content)),
  toggleTask: (id) => dispatch(toggleTaskAction(id)),
  removeTask: (id) => dispatch(removeTaskAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
