import React, { useState } from "react";

const News = ({ news }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article>
      <div className="block card rounded-lg news-card  text-secondary  ">
        <div className="py-3 px-6 border-b border-gray-400">
          <h1 className="text-xl">{news.headline}</h1>
        </div>
        <div className="p-6">
          <p className=" text-sm mb-4">
            {showDetails
              ? news.description
              : `${news.description.slice(0, 250)}...`}
          </p>
          <button
            onClick={() => setShowDetails(!showDetails)}
            type="button"
            className="    btn btn-primary  hover:bg-primary hover:text-white btn-xs  font-bold rounded-none"
          >
            {showDetails ? "See Less" : "See More"}
          </button>
        </div>
        <div className="py-3 px-6 border-t border-gray-400 text-gray-400">
          {news.date} days ago
        </div>
      </div>
    </article>
  );
};

export default News;
