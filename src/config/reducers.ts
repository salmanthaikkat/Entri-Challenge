import { combineReducers } from "redux";

import newsReducer from "../redux/news/reducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
