import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

function configureStore(preloadedState: object) {
  let middlewares = [thunk];

  if (process.env.NODE_ENV === "development") {
    middlewares = [...middlewares, require("redux-logger").default];
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

export const store = configureStore({});
