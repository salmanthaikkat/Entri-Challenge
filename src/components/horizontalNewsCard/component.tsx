import React from "react";
import { News } from "../../interfaces";
import moment from "moment";

interface Props {
  data: News;
}

const HorizontalNewsCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="horizontal-card-container">
      <div className="horizontal-card-container__image">
        <img src={data.urlToImage} alt={"news"} />
      </div>
      <div className="horizontal-card-container__content">
        <div className="horizontal-card-container__content-title">
          {data.title}
        </div>
        <div className="horizontal-card-container__content-description">
          {data.description}
        </div>
        <div className="horizontal-card-container__content-author">
          {data.author}
        </div>
        <div className="horizontal-card-container__content-date">
          {moment(data.publishedAt).format("MMM D")}
          <span></span>8 min Read
        </div>
      </div>
    </div>
  );
};

export default HorizontalNewsCard;
