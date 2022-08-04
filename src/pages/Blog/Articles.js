import React from "react";
<<<<<<< HEAD
import Article1 from '../../assets/images/article1.jpg'
=======
import Article1 from "../../assets/images/article1.jpg";
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
import Article from "./Article";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "When you are on your way to home",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",
<<<<<<< HEAD
     
      img:Article1
=======

      img: Article1,
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
    },
    {
      id: 1,
      title: "When you are on your way to home2",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",
<<<<<<< HEAD
     
      img:Article1
=======

      img: Article1,
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
    },
    {
      id: 1,
      title: "When you are on your way to home3",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",
<<<<<<< HEAD
     
      img:Article1
=======

      img: Article1,
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
    },
    {
      id: 1,
      title: "When you are on your way to hom4",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",
<<<<<<< HEAD
     
      img:Article1
=======

      img: Article1,
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
    },
    {
      id: 1,
      title: "When you are on your way to home5",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",
<<<<<<< HEAD
     
      img:Article1
=======

      img: Article1,
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
    },
    {
      id: 1,
      title: "When you are on your way to home6",
      desc: "Est enim effectrix multarum et magnarum voluptatum. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum [...]",
      publisher: "Roger Brown,Eva Janik",
<<<<<<< HEAD
     
      img:Article1
=======

      img: Article1,
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
    },
  ];
  return (
    <section className="mt-20">
      <div className="grid lg:grid-cols-2 grid-flow-row-dense lg:w-[80%] mx-auto  ">
<<<<<<< HEAD
     
        <div>
            {
                articles.slice(0,articles.length/2).map((article,i)=>(
                  <Article article={article} />
            
                ))
            }
        </div>
        <div className="mt-20">
            {
                articles.slice(articles.length/2,articles.length).map((article,i)=>(
                <Article article={article} />
                ))
            }
=======
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
>>>>>>> f4c4003370f950e4919b2cea2deb289fdd4e6e61
        </div>
      </div>
    </section>
  );
};

export default Articles;
