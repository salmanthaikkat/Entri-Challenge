import {
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_REQUEST,
  NEWS_FETCH_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  news: [],
};

const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NEWS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEWS_FETCH_SUCCESS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };

    case NEWS_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default newsReducer;
