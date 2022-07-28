import React, { useEffect, useState } from "react";
import News from "./News";

const NewsPortal = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch("NewsData.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);
  return (
    <section className="mt-20 px-4 lg:px-0">
      <h1 className="text-6xl uppercase text-center text-primary my-20">
        Our Latest News
      </h1>
      <div className="grid lg:grid-cols-3 gap-5">
        {newsData.map((news) => (
          <News key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
};

export default NewsPortal;
