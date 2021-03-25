import React from "react";
import ReactDOM from "react-dom";
import store from "./lib/store";
import { Provider } from "react-redux";
import FormProvider from "./hooks/useFormValidation";
import { deploy } from "./lib/actions/contracts/actionCreators";
import App from "./app";

const rootReactElement = (
  <React.StrictMode>
    <Provider store={store}>
      <FormProvider>
        <App />
      </FormProvider>
    </Provider>
  </React.StrictMode>
);
store.dispatch(deploy());
ReactDOM.render(rootReactElement, document.getElementById("root"));
