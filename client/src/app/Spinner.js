import React from "react";
import { useSelector } from "react-redux";

const Spinner = () => {
  const isPending = useSelector(({ todolist }) => todolist.isPending);
  return (
    isPending && (
      <div
        style={{
          height: "100vh",
          position: "absolute",
          left: "50%",
          opacity: "0.7",
        }}
      >
        <div
          class="spinner-border text-primary d-flex justify-content-center mt-5"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  );
};
export default Spinner;
