import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../../components/header";
import HorizontalNewsCard from "../../../../components/horizontalNewsCard";
import VerticalNewsCard from "../../../../components/verticalNewsCard";
import { RootState } from "../../../../config/reducers";
import { News } from "../../../../interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchNews } from "../../../../redux/news/action";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const MainContainer = () => {
  const dispatch = useDispatch();
  const { news, hasMore, category, query, page, loading } = useSelector(
    (state: RootState) => state.news
  );

  const fetchMoreNews = () => {
    dispatch(fetchNews(category, query, page + 1, true));
  };

  const renderLoader = () => {
    return (
      <div className="data-loader">
        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          <span>
            <ErrorOutlineIcon />
            No Results
          </span>
        )}
      </div>
    );
  };

  const renderData = () => {
    return (
      <React.Fragment>
        <div className="main-container__main-row">
          <div className="main-container__main-row__left">
            {<VerticalNewsCard data={news[0]} />}
          </div>
          <div className="main-container__main-row__right">
            {news.slice(1, 4).map((data: News, index: number) => (
              <HorizontalNewsCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="main-container__data-row">
          <InfiniteScroll
            dataLength={news.length}
            next={fetchMoreNews}
            hasMore={hasMore}
            loader={
              <div className="data-loader">
                <CircularProgress color="primary" />
              </div>
            }
            endMessage={<p>No more results</p>}
          >
            {news.slice(4).map((data: News, index: number) => (
              <HorizontalNewsCard key={index} data={data} />
            ))}
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="main-container">
      <Header />
      <div className="main-container__main">
        {news.length === 0 ? renderLoader() : renderData()}
      </div>
    </div>
  );
};

export default MainContainer;
