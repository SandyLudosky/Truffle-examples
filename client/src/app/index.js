import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import {
  readTasks as readTasksAction,
  addTask as addTaskAction,
  removeTask as removeTaskAction,
  toggleTask as toggleTaskAction,
  readTasks,
} from "../lib/actions/todolist";
import "./App.css";

const App = ({
  instance,
  isPending,
  error,
  items,
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

  useEffect(() => readTasks(), []);

  return (
    <div className="App">
      <h1>Smart Contract Example with React &amp; Redux</h1>
      <div className="App">
        <p>Try changing the value stored on your smart contract :</p>
        <form onSubmit={handleOnSubmit}>
          <input
            type="number"
            onChange={handleOnChange}
            placeholder="enter value here"
            ref={inputRef}
          />
          &nbsp;
          <button type="submit">Submit</button>
        </form>
        <p></p>
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
