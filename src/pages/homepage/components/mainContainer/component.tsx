import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../../components/header";
import HorizontalNewsCard from "../../../../components/horizontalNewsCard";
import VerticalNewsCard from "../../../../components/verticalNewsCard";
import { RootState } from "../../../../config/reducers";
import { News } from "../../../../interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchNews } from "../../../../redux/news/action";

const MainContainer = () => {
  const dispatch = useDispatch();
  const { news, hasMore, totalResult, category, query, page } = useSelector(
    (state: RootState) => state.news
  );

  const fetchMoreNews = () => {
    dispatch(fetchNews(category, query, page + 1, true));
  };

  return (
    <div className="main-container">
      <Header />
      <div className="main-container__main">
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
        {/* <div className="main-container__data-row">
          {news.slice(4).map((data: News, index: number) => (
            <HorizontalNewsCard key={index} data={data} />
          ))}
        </div> */}
        <div className="main-container__data-row">
          <InfiniteScroll
            dataLength={news.length}
            next={fetchMoreNews}
            hasMore={hasMore}
            loader={<p>Loading...</p>}
            endMessage={<p>No more results</p>}
          >
            {news.slice(4).map((data: News, index: number) => (
              <HorizontalNewsCard key={index} data={data} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
