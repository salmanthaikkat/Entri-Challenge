import {
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_REQUEST,
  NEWS_FETCH_FAILURE,
  NEWS_FETCH_MORE,
} from "./types";

const initialState = {
  loading: false,
  news: [],
  hasMore: true,
  totalResult: 0,
  category: "",
  query: "",
  page: 0,
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
        news: action.payload.data.articles,
        loading: false,
        hasMore: action.payload.data.totalResults > 20,
        totalResult: action.payload.data.totalResults,
        category: action.payload.category,
        query: action.payload.query,
        page: action.payload.page,
      };

    case NEWS_FETCH_MORE:
      return {
        ...state,
        news: [...state.news, ...action.payload.articles],
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
