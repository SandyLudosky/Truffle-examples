import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { setValue, getValue } from "../lib/actions/storage";
import { readMessage } from "../lib/actions/greetings";
import "./App.css";

const App = ({
  instance,
  isStorageValuePending,
  isGreetingMessagePending,
  storageValue,
  welcomeMessage,
  setValue,
  getValue,
  readMessage,
  event,
}) => {
  const inputRef = useRef();
  const [localValue, setLocalValue] = useState(null);

  const handleOnChange = (e) => setLocalValue(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!localValue) {
      return false;
    }
    setValue(localValue);
    inputRef.current.value = null;
  };

  useEffect(() => {
    if (event?.event === "Set") {
      alert("new value added");
    }
  }, [event?.transactionHash, event?.event]);
  useEffect(() => getValue(), [getValue]);
  useEffect(() => readMessage(), [readMessage]);

  return (
    <div className="App">
      <h1>
        {isGreetingMessagePending
          ? "Smart Contract Example with React &amp; Redux"
          : welcomeMessage}
      </h1>
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
        <p>
          The stored value is:{" "}
          {isStorageValuePending ? "data is loading..." : storageValue}
        </p>
      </div>
      <p className="footer">
        {!!instance && `contract's address : ${instance.options.address}`}
      </p>
    </div>
  );
};

const mapStateToProps = ({ storage, greetings, contracts }) => {
  return {
    storageValue: storage.storageValue,
    isStorageValuePending: storage.isPending,
    isGreetingMessagePending: greetings.isPending,
    welcomeMessage: greetings.message,
    instance: storage.instance,
    event: contracts.event,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setValue: (value) => dispatch(setValue(value)),
  getValue: () => dispatch(getValue()),
  readMessage: () => dispatch(readMessage()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
