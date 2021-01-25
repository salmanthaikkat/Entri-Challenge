export const fetchNews = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchNewsRequest());
    } catch (err) {
      console.log(err);
    }
  };
};

const fetchNewsRequest = () => {
  return {
    type: "FETCH_NEWS_REQUEST",
  };
};
