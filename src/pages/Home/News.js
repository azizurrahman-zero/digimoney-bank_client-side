import React, { useState } from "react";

const News = ({ news }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article>
      <div class="block rounded-lg shadow-lg bg-secondary text-accent  ">
        <div class="py-3 px-6 border-b border-gray-400">
          <h1 className="text-xl">{news.headline}</h1>
        </div>
        <div class="p-6">
          <p class="text-accent text-sm mb-4">
            {showDetails
              ? news.description
              : `${news.description.slice(0, 250)}...`}
          </p>
          <button
            onClick={() => setShowDetails(!showDetails)}
            type="button"
            class="   btn btn-primary btn-xs  text-accent rounded-none"
          >
            {showDetails ? "See Less" : "See More"}
          </button>
        </div>
        <div class="py-3 px-6 border-t border-gray-400 text-gray-400">
          {news.date} days ago
        </div>
      </div>
    </article>
  );
};

export default News;
