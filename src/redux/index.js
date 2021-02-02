import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import gameReducer from "./reducers/gameReducer";
import collectionReducer from "./reducers/collectionReducer";

import logger from "redux-logger";

const rootReducer = combineReducers({
  auth: authReducer,
  released: gameReducer,
  collection: collectionReducer,
  // search: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
