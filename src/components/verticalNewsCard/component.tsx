import React from "react";
import moment from "moment";
import { News } from "../../interfaces";

interface Props {
  data: News;
}

const VerticalNewsCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="vertical-card-container">
      {data ? (
        <React.Fragment>
          <div
            className="vertical-card-container__image"
            style={{ backgroundImage: `url(${data.urlToImage})` }}
          ></div>
          <div className="vertical-card-container__content">
            <div className="vertical-card-container__content-title">
              {data.title}
            </div>
            <div className="vertical-card-container__content-description">
              {data.description}
            </div>
            <div className="vertical-card-container__content-author">
              {data.author}
            </div>
            <div className="vertical-card-container__content-date">
              {moment(data.publishedAt).format("MMM D")}
              <span></span>8 min Read
            </div>
          </div>
        </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VerticalNewsCard;
