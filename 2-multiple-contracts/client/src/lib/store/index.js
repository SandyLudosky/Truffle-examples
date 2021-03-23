import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import web3Middleware from "../middlewares/web3Middleware";
import { SimpleStorage, Greetings } from "../../contracts";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25,
  }) || compose;

const contracts = [SimpleStorage, Greetings]; /* add contracts json here */

const middlewares = applyMiddleware(web3Middleware(contracts));
export default createStore(rootReducer, composeEnhancer(middlewares));
