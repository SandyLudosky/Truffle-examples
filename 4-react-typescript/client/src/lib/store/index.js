import { createStore, compose, applyMiddleware } from "redux";
import Web3M from "../middlewares/web3Middleware";
import rootReducer from "../reducers";
import logger from "../middlewares/logger";
import Article from "../../contracts/Article.json";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25,
  }) || compose;

const contracts = [Article]; /* add contracts json here */
const middlewares = [Web3M(contracts), logger()];
export default createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);
