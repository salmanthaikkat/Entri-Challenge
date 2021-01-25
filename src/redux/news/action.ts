import newsRequest from "../../services/newsService";
import {
  NEWS_FETCH_FAILURE,
  NEWS_FETCH_REQUEST,
  NEWS_FETCH_SUCCESS,
} from "./types";

export const fetchNews = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchNewsRequest());
      const data = await newsRequest({
        method: "GET",
        url: `/top-headlines?country=us`,
      });
      dispatch(fetchNewsSuccess(data.articles));
    } catch (err) {
      dispatch(fetchNewsFailure());
      console.log(err);
    }
  };
};

const fetchNewsRequest = () => {
  return {
    type: NEWS_FETCH_REQUEST,
  };
};

const fetchNewsSuccess = (data: Object[]) => {
  return {
    type: NEWS_FETCH_SUCCESS,
    payload: data,
  };
};

const fetchNewsFailure = () => {
  return {
    type: NEWS_FETCH_FAILURE,
  };
};
