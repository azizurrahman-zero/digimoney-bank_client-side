import React from "react";
import Article1 from "../../assets/images/article1.jpg";
import Article from "./Article";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "When you are on your way to home",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",

      img: Article1,
    },
    {
      id: 1,
      title: "When you are on your way to home2",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",

      img: Article1,
    },
    {
      id: 1,
      title: "When you are on your way to home3",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",

      img: Article1,
    },
    {
      id: 1,
      title: "When you are on your way to hom4",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",

      img: Article1,
    },
    {
      id: 1,
      title: "When you are on your way to home5",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",

      img: Article1,
    },
    {
      id: 1,
      title: "When you are on your way to home6",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",

      img: Article1,
    },
  ];
  return (
    <section className="mt-20">
      <div className="grid lg:grid-cols-2 grid-flow-row-dense lg:w-[80%] mx-auto  ">
        <div>
          {articles.slice(0, articles.length / 2).map((article, i) => (
            <Article article={article} />
          ))}
        </div>
        <div className="mt-20">
          {articles
            .slice(articles.length / 2, articles.length)
            .map((article, i) => (
              <Article article={article} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
