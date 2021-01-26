import newsRequest from "../../services/newsService";
import {
  NEWS_FETCH_FAILURE,
  NEWS_FETCH_MORE,
  NEWS_FETCH_REQUEST,
  NEWS_FETCH_SUCCESS,
} from "./types";

export const fetchNews = (
  category: string,
  query: string,
  page: number,
  fetchMore: boolean
) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchNewsRequest());
      const data = await newsRequest({
        method: "GET",
        url: `/top-headlines?category=${category}&country=us&pageSize=20&page=${page}&q=${query}`,
      });
      if (fetchMore) {
        dispatch(fetchNewsMore(data));
      } else {
        dispatch(fetchNewsSuccess({ data, category, query, page }));
      }
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

const fetchNewsSuccess = (data: Object) => {
  return {
    type: NEWS_FETCH_SUCCESS,
    payload: data,
  };
};

const fetchNewsMore = (data: any) => {
  return {
    type: NEWS_FETCH_MORE,
    payload: data,
  };
};

const fetchNewsFailure = () => {
  return {
    type: NEWS_FETCH_FAILURE,
  };
};
