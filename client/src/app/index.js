import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import {
  readTasks as readTasksAction,
  addTask as addTaskAction,
  removeTask as removeTaskAction,
  toggleTask as toggleTaskAction,
} from "../lib/actions/todolist";
import "./App.css";

const App = ({
  instance,
  items,
  error,
  isPending,
  addTask,
  removeTask,
  toggleTask,
  readTasks,
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

  useEffect(() => readTasks(), []);
  useEffect(() => readTasks(), [items]);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-3">
          <h1>TodoList</h1>
          <form onSubmit={handleOnSubmit} className="mtē">
            <input
              type="text"
              className="col-form-label col-md-9 col-lg"
              onChange={handleOnChange}
              placeholder="enter todo here"
              ref={inputRef}
            />
            <button
              type="submit"
              className="btn btn-secondary btn-lg col-md-2 offset-1"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="mt-5 col-md-6 offset-3">
          {items.map((item) => {
            return (
              <div className="d-flex justify-content-between align-items-center mb-2 border">
                <p>{item.content}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeTask(item.id)}
                >
                  delete
                </button>
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
  todolist: { instance, items, isPending, error },
}) => {
  return {
    instance,
    items,
    isPending,
    error,
  };
};
const mapDispatchToProps = (dispatch) => ({
  readTasks: () => dispatch(readTasksAction()),
  addTask: (content) => dispatch(addTaskAction(content)),
  toggleTask: (id) => dispatch(toggleTaskAction(id)),
  removeTask: (id) => dispatch(removeTaskAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
