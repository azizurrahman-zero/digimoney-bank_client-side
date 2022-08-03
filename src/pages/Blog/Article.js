import React from 'react';

const Article = ({article}) => {
    return (
        <div className="w-[70%] mx-auto">

        <img className="w-[100%] " src={article.img} alt="" />
        <div>
            <h1 className="text-[30px] leading-[1.5] mt-[10px]">{article.title}</h1>
            <p className="my-[25px]">{article.desc}</p>
        </div>
        <div className="my-10">
          <p className="text-sm font-semibold text-secondary">{article.publisher}</p>
          <p className="text-sm  ">Published{article.date} years ago</p>
          
        </div>
        </div>
    );
};

export default Article;