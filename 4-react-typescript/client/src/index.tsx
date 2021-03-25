import React from "react";
import ReactDOM from "react-dom";
import store from "./lib/store";
import { Provider } from "react-redux";
import FormProvider from "./hooks/useFormValidation";

import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FormProvider>
        <App />
      </FormProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
