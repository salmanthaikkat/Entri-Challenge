import { NEWS_FETCH_SUCCESS } from "./types";

const initialState = {
  news: [],
};

const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NEWS_FETCH_SUCCESS:
      return {
        ...state,
        news: action.payload,
      };

    default:
      return state;
  }
};

export default newsReducer;
