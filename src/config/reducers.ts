import { combineReducers } from "redux";

import newsReducer from "../redux/news/reducer";
import weatherReducer from "../redux/weather/reducer";

const rootReducer = combineReducers({
  news: newsReducer,
  weather: weatherReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
